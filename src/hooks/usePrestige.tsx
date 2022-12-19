import React, { useContext } from "react";
import {
  PrestigeMenuItemIds,
  PrestigePointsPreLevel,
} from "../config/prestige";
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
      setTotalPrestigePoints(
        (prevTotalPrestigePoints: number) =>
          prevTotalPrestigePoints + PrestigePointsPreLevel.One
      );
      setIsActivatingPrestige(true);
    }
  };

  /**
   * Check if prestige power ups are active and set the power up bonus
   * TODO: Refactor this at some point (create function for each prestige power up and combine them here)
   */
  const setPrestigePowerUps = () => {
    const doubleXpPrestige = prestigeStats.find(
      (stat) => stat.prestigeItemId === PrestigeMenuItemIds.Two
    );
    if (doubleXpPrestige?.isActive) {
      setPrestigeMultiplier(1);
    }
  };

  /**
   * Calculate the total number of unused prestige points
   */
  const calculateUnusedPrestigePoints = (): number => {
    return totalPrestigePoints - assignedPrestigePoints;
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
    calculateUnusedPrestigePoints,
  };
};

export default usePrestige;
