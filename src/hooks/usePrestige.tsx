import React, { useContext } from "react";
import { PrestigeMenuItemIds } from "../config/prestige";
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
    setStatPerClick,
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
      // TODO: Reset stat per click value for every resource after prestige
    }
  };

  const setPrestigePowerUps = () => {
    const doubleXpPrestige = prestigeStats.find(
      (stat) => stat.prestigeItemId === PrestigeMenuItemIds.Two
    );
    if (doubleXpPrestige?.isActive) {
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
    setPrestigePowerUps,
  };
};

export default usePrestige;
