import React, { useContext } from "react";
import {
  PrestigeMenuItemIds,
  PrestigePointsPreLevel,
  ScoreToShowPrestige,
} from "../config/prestige";
import { PrestigeContext } from "../context/PrestigeContext";
import { useStore } from "../store";
import usePowerUp from "./usePowerUp";
import useStat from "./useStat";

/**
 * Main hook used for handling prestige logic
 */
const usePrestige = (): any => {
  const prestigeContext = useContext(PrestigeContext);

  const { totalStats, setTotalStats, setTier, setPrestigeMultiplier } =
    useStat();

  const { setPowerUpShowTimer, setDisplayDoubleXp } = usePowerUp();

  // TODO: Replace context with MobX

  const {
    isActivatingPrestige,
    setIsActivatingPrestige,
    prestigeStats,
    setPrestigeStats,
  } = prestigeContext;

  const store = useStore();
  const { prestigeStore } = store;
  const {
    prestigeLevel,
    setPrestigeLevel,
    totalPrestigePoints,
    setTotalPrestigePoints,
    assignedPrestigePoints,
    setAssignedPrestigePoints,
  } = prestigeStore;

  const prestigeScore = 100;

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
    // Prestige level 1
    if (totalStats > ScoreToShowPrestige.One && prestigeLevel < 1) {
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
    setPrestigeStats,
    setPrestigePowerUps,
    calculateUnusedPrestigePoints,
    showPrestigeButton,
  };
};

export default usePrestige;
