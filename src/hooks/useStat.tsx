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
    setStat((prevStat) => prevStat + amountWithMultiplier);
    statContext?.setTotalStats(
      (prevTotalStats) => prevTotalStats + amountWithMultiplier
    );
  };

  /**
   * Increment the number of points that are added to a stat on click
   * @param amount The amount to use increment a stat for per click
   */
  const incrementStatPerClick = (amount: number): void => {
    setStatPerClick((prevStatPerClick) => prevStatPerClick + amount);
  };

  /**
   * Decrement the number of points that are added to a stat on click
   * @param amount The amount to use decrement a stat for per click
   */
  const decrementStatPerClick = (amount: number): void => {
    setStatPerClick((prevStatPerClick) => prevStatPerClick - amount);
  };

  /**
   * Auto increment stat and total stats every second
   */
  const autoIncrementStat = (): void => {
    setInterval(() => {
      setStat((prevStat) => prevStat + statPerClick);
      statContext?.setTotalStats(
        (prevTotalStats) => prevTotalStats + statPerClick
      );
    }, 1000);
  };

  return [
    stat,
    statPerClick,
    incrementStat,
    incrementStatPerClick,
    autoIncrementStat,
    decrementStatPerClick,
  ];
};

export default useStat;
