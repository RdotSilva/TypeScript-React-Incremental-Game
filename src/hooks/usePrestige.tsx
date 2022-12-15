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

  // TODO: Implement this
  const checkPrestigeValues = () => {
    // Check if prestige 001 is active
    // Set a multipler for that prestige if it is active setPrestigeMultiplier(2)
    // This will now be added to the context and we can use it inside of UseStat hook to add the multipler
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
  };
};

export default usePrestige;
