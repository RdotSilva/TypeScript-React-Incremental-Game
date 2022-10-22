import React, { useState } from "react";

/**
 * Main hook used for raising stats and stats per click
 */
const useStat = (): any => {
  const [stat, setStat] = useState<number>(0);
  const [statPerClick, setStatPerClick] = useState<number>(1);

  /**
   * Increment a stat
   * @param amount The amount to use when incrementing a stat
   */
  const incrementStat = (amount: number): void => {
    setStat(stat + amount);
  };

  /**
   * Increment the number of points that are added to a stat on click
   * @param amount The amount to use increment a stat for per click
   */
  const incrementStatPerClick = (amount: number): void => {
    setStatPerClick(statPerClick + amount);
  };

  return [stat, statPerClick, incrementStat, incrementStatPerClick];
};

export default useStat;
