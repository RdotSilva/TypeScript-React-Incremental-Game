import { observer } from "mobx-react-lite";
import React, { useState, useContext } from "react";
import { StatContext } from "../context/StatContext";
import { useStore } from "../store";

/**
 * Main hook used for raising stats and stats per click
 */
const useStat = (): any => {
  const [stat, setStat] = useState<number>(0);
  const [statPerClick, setStatPerClick] = useState<number>(1);

  const statContext = useContext(StatContext);
  const { setTier, prestigeMultiplier, setPrestigeMultiplier } = statContext;

  // TODO: Reactor everything to use the store rather than context
  const store = useStore();
  const { statStore } = store;
  const { powerUpMultiplier, setPowerUpMultiplier } = statStore;

  /**
   * Increment a stat
   * @param amount The amount to use when incrementing a stat
   */
  const incrementStat = (amount: number): void => {
    // TODO: Refactor this to handle any multipliers passed in for future
    const totalMultiplier = powerUpMultiplier + prestigeMultiplier;

    const amountWithMultiplier = amount * statPerClick * totalMultiplier;
    setStat((prevStat) => prevStat + amountWithMultiplier);
    statStore.setTotalStats(amountWithMultiplier);
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
    // TODO: Add powerUpMultiplier to this (consider a separate power up)
    setInterval(() => {
      setStat((prevStat) => prevStat + statPerClick);
      statStore.setTotalStats(statPerClick);
    }, 1000);
  };

  return {
    stat,
    statPerClick,
    setStatPerClick,
    incrementStat,
    incrementStatPerClick,
    autoIncrementStat,
    decrementStatPerClick,
    setStat,
    setPowerUpMultiplier,
    setTier,
    setPrestigeMultiplier,
  };
};

export default useStat;
