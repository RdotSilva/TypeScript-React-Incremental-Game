import React, { useState, useMemo, useCallback } from "react";
import { PowerUpShowTimers } from "../config/config";
import useStat from "./useStat";

/**
 * Main hook used for handling power up timer and activation/deactivation
 */
const usePowerUp = (): any => {
  const { powerUpTimer, setPowerUpTimer } = useStat();

  const [powerUpShowTimer, setPowerUpShowTimer] = useState<number>(
    PowerUpShowTimers.One
  );
  const [powerUpVisible, setPowerUpVisible] = useState<boolean>(false);
  const [showPowerUpExpireTimer, setShowPowerUpExpireTimer] =
    useState<boolean>(false);
  const [powerUpPosition, setPowerUpPosition] = useState<string>("center");
  const [displayDoubleXp, setDisplayDoubleXp] = useState<number>(
    PowerUpShowTimers.One
  );

  /**
   * This is used to determine how often a power-up button should be shown to the user
   * This will default to the configuration set in the config file
   *
   */
  const displayPowerUpInterval = useMemo(() => {
    if (!showPowerUpExpireTimer) {
      return powerUpShowTimer;
    }

    // TODO: Look into this logic it may be buggy

    return powerUpShowTimer + powerUpTimer;
  }, [powerUpShowTimer]);

  /**
   * Randomize the position of the power up button
   * This can be left, center, or right
   */
  const randomizePowerUpLocation = useCallback(() => {
    {
      const possiblePositions = ["left", "center", "right"];
      const randomPosition =
        possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
      setPowerUpPosition(randomPosition);
    }
  }, [setPowerUpPosition]);

  return {
    powerUpShowTimer,
    setPowerUpShowTimer,
    powerUpVisible,
    setPowerUpVisible,
    powerUpTimer,
    setPowerUpTimer,
    showPowerUpExpireTimer,
    setShowPowerUpExpireTimer,
    powerUpPosition,
    setPowerUpPosition,
    displayPowerUpInterval,
    displayDoubleXp,
    setDisplayDoubleXp,
    randomizePowerUpLocation,
  };
};

export default usePowerUp;
