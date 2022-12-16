import React, { useContext } from "react";
import { PrestigeContext } from "../context/PrestigeContext";
import useStat from "./useStat";

/**
 * Main hook used for handling prestige logic
 */
const usePrestige = (): any => {
  const prestigeContext = useContext(PrestigeContext);
  const {
    resetStat,
    totalStats,
    setTotalStats,
    stat,
    setTier,
    setPrestigeMultiplier,
  } = useStat();

  const {
    prestigeLevel,
    setPrestigeLevel,
    totalPrestigePoints,
    setTotalPrestigePoints,
    assignedPrestigePoints,
    setAssignedPrestigePoints,
    isActivatingPrestige,
    setIsActivatingPrestige,
    prestigeStats,
    setPrestigeStats,
  } = prestigeContext;

  const prestigeScore = 100;

  /**
   * Confirm prestige by resetting total stats, resetting tier back to starting tier, and increment prestige level
   */
  const confirmPrestige = () => {
    if (totalStats >= prestigeScore) {
      setTotalStats(0);
      setTier(1);
      setPrestigeLevel(1);
      // TODO: Work this logic for custom prestige points rather than 1 hard coded
      setTotalPrestigePoints(
        (prevTotalPrestigePoints: number) => prevTotalPrestigePoints + 1
      );
      setIsActivatingPrestige(true);
    }
  };

  // TODO: Refactor this with better name and clean up logic
  const checkPrestigeValues = () => {
    const doubleXpPrestige = prestigeStats.filter(
      (stat) => stat.prestigeItemId === "001"
    );

    console.log(doubleXpPrestige);

    if (doubleXpPrestige[0].isActive) {
      setPrestigeMultiplier(1);
    }
  };

  return {
    prestigeLevel,
    setPrestigeLevel,
    totalPrestigePoints,
    setTotalPrestigePoints,
    assignedPrestigePoints,
    setAssignedPrestigePoints,
    isActivatingPrestige,
    setIsActivatingPrestige,
    confirmPrestige,
    prestigeStats,
    setPrestigeStats,
    checkPrestigeValues,
  };
};

export default usePrestige;
