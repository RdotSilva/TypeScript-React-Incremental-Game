import React, { useState, useEffect, useContext } from "react";
import useStat from "../../../hooks/useStat";
import { Box, Container, Grid } from "@mui/material";
import Upgrade from "../../Upgrade/Upgrade";
import { StatContext } from "../../../context/StatContext";
import { styled } from "@mui/material/styles";

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
};

/**
 * Generate a resource type
 */
const ResourceContainer = ({
  image,
  resourceTier,
  nextTierThreshold,
  initialStatValue,
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
  const [totalUpgrades, setTotalUpgrades] = useState<number>(0);

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

  useEffect(() => {
    if (stat > nextTierThreshold) {
      // Only set the next tier if current tier is below the resource tier
      if (statContext?.tier! <= resourceTier) {
        statContext?.setTier(resourceTier + 1);
      }
    }
  }, [stat]);

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
        />
      </Grid>
    </StyledResourceContainer>
  );
};

export default ResourceContainer;
