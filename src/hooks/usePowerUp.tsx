import React, { useContext, useState } from "react";
import { PowerUpShowTimers } from "../config/config";
import { StatContext } from "../context/StatContext";

/**
 * Main hook used for handling power up timer and activation/deactivation
 */
const usePowerUp = (): any => {
  const statContext = useContext(StatContext);
  const { powerUpTimer, setPowerUpTimer } = statContext;

  const [powerUpShowTimer, setPowerUpShowTimer] = useState<number>(
    PowerUpShowTimers.One
  );
  const [powerUpVisible, setPowerUpVisible] = useState<boolean>(false);
  const [showPowerUpExpireTimer, setShowPowerUpExpireTimer] =
    useState<boolean>(false);
  const [powerUpPosition, setPowerUpPosition] = useState<string>("center");

  const displayPowerUpInterval = !showPowerUpExpireTimer
    ? powerUpShowTimer
    : powerUpShowTimer + powerUpTimer;

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
  };
};

export default usePowerUp;
