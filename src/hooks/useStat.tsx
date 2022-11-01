import React, { useState, useContext } from "react";
import { StatContext } from "../context/GameContext";

/**
 * Main hook used for raising stats and stats per click
 */
const useStat = (): any => {
  const [stat, setStat] = useState<number>(0);
  const [statPerClick, setStatPerClick] = useState<number>(1);

  const statContext = useContext(StatContext);

  /**
   * Increment a stat
   * @param amount The amount to use when incrementing a stat
   */
  const incrementStat = (amount: number): void => {
    const amountWithMultiplier = amount * statPerClick;
    setStat(stat + amountWithMultiplier);
    statContext?.setTotalStats(statContext.totalStats + amountWithMultiplier);
  };

  /**
   * Increment the number of points that are added to a stat on click
   * @param amount The amount to use increment a stat for per click
   */
  const incrementStatPerClick = (amount: number): void => {
    setStatPerClick(statPerClick + amount);
  };

  /**
   * Auto increment stat and total stats every second
   */
  const autoIncrementStat = (): void => {
    setInterval(() => {
      setStat((prevState) => prevState + statPerClick);
      statContext?.setTotalStats((prevState) => prevState + statPerClick);
    }, 1000);
  };

  return [
    stat,
    statPerClick,
    incrementStat,
    incrementStatPerClick,
    autoIncrementStat,
  ];
};

export default useStat;
