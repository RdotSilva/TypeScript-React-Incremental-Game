import React, { useState, useEffect, useContext } from "react";
import useStat from "../../../hooks/useStat";
import { Box, Container, Grid } from "@mui/material";
import Upgrade from "../../Upgrade/Upgrade";
import { StatContext } from "../../../context/StatContext";
import { PrestigeContext } from "../../../context/PrestigeContext";
import { styled } from "@mui/material/styles";
import usePrestige from "../../../hooks/usePrestige";

const StyledResourceContainer = styled(Grid)({
  display: "flex",
  padding: "1px",
  alignItems: "center",
  borderBottom: "1px solid",
  margin: "5px",
});

const StyledIconScoreContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  padding: "1px",
  alignItems: "center",
});

const StyledResourceImage = styled("img")({
  border: "1px solid",
  borderRadius: "5px",
});

type Props = {
  image: any;
  resourceTier: number;
  nextTierThreshold: number;
  initialStatValue: number;
  amountToShowUpgradeMultiplier: number;
};

/**
 * Generate a resource type
 */
const ResourceContainer = ({
  image,
  resourceTier,
  nextTierThreshold,
  initialStatValue,
  amountToShowUpgradeMultiplier,
}: Props) => {
  const statContext = useContext(StatContext);

  const {
    stat,
    setStat,
    setStatPerClick,
    incrementStat,
    incrementStatPerClick,
    autoIncrementStat,
  } = useStat();

  const prestigeContext = useContext(PrestigeContext);
  const { isActivatingPrestige, setIsActivatingPrestige } = prestigeContext;

  const [totalUpgrades, setTotalUpgrades] = useState<number>(0);

  const { prestigeLevel } = usePrestige();

  /**
   * Upgrade a resource and increase the stat per click for that particular resource
   * @param amount The amount to increase the stat per click
   */
  const upgrade = (amount: number) => {
    incrementStatPerClick(amount);
    setTotalUpgrades(totalUpgrades + 1);

    // Add the auto stat click after the 3rd upgrade
    if (totalUpgrades >= 2) {
      autoIncrementStat();
    }
  };

  /**
   * Set the value for clicks for the resource
   */
  useEffect(() => {
    setStatPerClick(initialStatValue);
  }, []);

  /**
   * Set the value for clicks for the resource after we have activated prestige
   * This resets the value back to initial values otherwise we would keep upgrades after a prestige
   */
  useEffect(() => {
    if (prestigeLevel > 0) {
      setStatPerClick(initialStatValue);
    }
  }, [prestigeLevel]);

  useEffect(() => {
    if (stat > nextTierThreshold) {
      // Only set the next tier if current tier is below the resource tier
      if (statContext?.tier! <= resourceTier) {
        statContext?.setTier(resourceTier + 1);
      }
    }
  }, [stat]);

  /**
   * Reset the resource stat to 0 and reset the prestige flag after prestige is activated
   */
  useEffect(() => {
    if (isActivatingPrestige) {
      setStat(0);
      setIsActivatingPrestige(false);
    }
  });

  return (
    <StyledResourceContainer>
      <StyledIconScoreContainer>
        <StyledResourceImage
          src={require(`../../../images/resources/${image}.png`)}
          alt={image}
          onClick={() => incrementStat(1)}
        />
        {stat}
      </StyledIconScoreContainer>
      <Grid item>
        <Upgrade
          statTotal={stat}
          totalUpgrades={totalUpgrades}
          upgrade={upgrade}
          amountToShowUpgradeMultiplier={amountToShowUpgradeMultiplier}
        />
      </Grid>
    </StyledResourceContainer>
  );
};

export default ResourceContainer;
