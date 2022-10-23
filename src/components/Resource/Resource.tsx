import React, { useState } from "react";
import useStat from "../../hooks/useStat";
import { Box, Container } from "@mui/material";
import Upgrade from "../Upgrade/Upgrade";

type Props = {
  image: any;
};

/**
 * Generate a resource type
 */
const Resource = ({ image }: Props) => {
  const [
    stat,
    statPerClick,
    incrementStat,
    incrementStatPerClick,
    autoIncrementStat,
  ] = useStat();
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

  return (
    <Container>
      <Box component="span" sx={{ display: "block" }}>
        <div>{stat}</div>
      </Box>

      <Box>
        <img src={image} alt="tree" onClick={() => incrementStat(1)} />
      </Box>

      <Upgrade
        statTotal={stat}
        totalUpgrades={totalUpgrades}
        upgrade={upgrade}
      />
    </Container>
  );
};

export default Resource;
