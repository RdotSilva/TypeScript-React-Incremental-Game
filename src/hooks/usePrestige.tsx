import React from "react";
import {
  PrestigeMenuItemIds,
  PrestigePointsPreLevel,
  ScoreToShowPrestige,
} from "../config/prestige";

import { useStore } from "../store";
import usePowerUp from "./usePowerUp";
import useStat from "./useStat";

/**
 * Main hook used for handling prestige logic
 */
const usePrestige = (): any => {
  const { totalStats, setTotalStats, setTier, setPrestigeMultiplier } =
    useStat();

  const { setPowerUpShowTimer, setDisplayDoubleXp } = usePowerUp();

  const store = useStore();
  const { prestigeStore } = store;

  // TODO: Check all logic changed by refactoring from context to Mobx store below
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
  } = prestigeStore;

  // TODO: Using testing value for now, revert this after testing prestige logic
  const prestigeScore = ScoreToShowPrestige.Testing;

  /**
   * Confirm prestige by resetting total stats, resetting tier back to starting tier, and increment prestige level
   */
  const confirmPrestige = () => {
    if (totalStats >= prestigeScore) {
      setTotalStats(0);
      setTier(1);
      setPrestigeLevel(1);
      setTotalPrestigePoints(PrestigePointsPreLevel.One);
      setIsActivatingPrestige(true);
    }
  };

  /**
   * Check if prestige power ups are active and set the power up bonus
   * TODO: Refactor this at some point (create function for each prestige power up and combine them here)
   */
  const setPrestigePowerUps = () => {
    const doubleXpPrestige = prestigeStats.find(
      (stat) => stat.id === PrestigeMenuItemIds.Two
    );
    if (doubleXpPrestige?.isActive) {
      // TODO: Check this logic, something seems off when this is activated
      setPrestigeMultiplier(1);
    }

    const prestigePowerUpThree = prestigeStats.find(
      (stat) => stat.id === PrestigeMenuItemIds.Three
    );

    if (prestigePowerUpThree?.isActive) {
      console.log(prestigePowerUpThree);
      // TODO: Decrease overall powerup display time
      // TODO: Test this logic
      setDisplayDoubleXp(500);
    }
  };

  /**
   * Calculate the total number of unused prestige points
   */
  const calculateUnusedPrestigePoints = (): number => {
    return totalPrestigePoints - assignedPrestigePoints;
  };

  /**
   * Check if we should show the prestige button
   * We only want to show this the first time the users prestiges (for now)
   * TODO: Update this logic to add multiple prestige levels
   */
  const showPrestigeButton = () => {
    // TODO: Revert this value after tweaking prestige logic, using test value for now
    if (totalStats > ScoreToShowPrestige.Testing && prestigeLevel < 1) {
      return true;
    }

    // Prestige level 2
    if (totalStats > ScoreToShowPrestige.Two && prestigeLevel < 2) {
      return true;
    }

    return false;
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
    setPrestigePowerUps,
    calculateUnusedPrestigePoints,
    showPrestigeButton,
  };
};

export default usePrestige;
