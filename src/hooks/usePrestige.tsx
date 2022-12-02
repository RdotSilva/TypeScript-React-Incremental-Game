import React, { useContext } from "react";
import { PrestigeContext } from "../context/PrestigeContext";
import useStat from "./useStat";

/**
 * Main hook used for handling prestige logic
 */
const usePrestige = (): any => {
  const prestigeContext = useContext(PrestigeContext);
  const { resetStat, totalStats, setTotalStats, stat, setTier } = useStat();

  const {
    prestigeLevel,
    setPrestigeLevel,
    isActivatingPrestige,
    setIsActivatingPrestige,
  } = prestigeContext;

  const prestigeScore = 100;

  /**
   * Confirm prestige by resetting total stats, resetting tier back to starting tier, and increment prestige level
   */
  const confirmPrestige = () => {
    console.log(totalStats);
    console.log(prestigeScore);
    if (totalStats >= prestigeScore) {
      setTotalStats(0);
      setTier(1);
      setPrestigeLevel(1);
      setIsActivatingPrestige(true);
    }
  };

  return {
    prestigeLevel,
    setPrestigeLevel,
    isActivatingPrestige,
    setIsActivatingPrestige,
    confirmPrestige,
  };
};

export default usePrestige;
