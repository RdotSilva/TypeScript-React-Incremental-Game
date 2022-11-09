import React, { useState } from "react";
import { PowerUpExpireTimers, PowerUpShowTimers } from "../config/config";

/**
 * Main hook used for handling power up timer and activation/deactivation
 */
const usePowerUp = (): any => {
  const [powerUpShowTimer, setPowerUpShowTimer] = useState<number>(
    PowerUpShowTimers.One
  );
  const [powerUpVisible, setPowerUpVisible] = useState<boolean>(false);
  const [powerUpExpireTimer, setPowerUpExpireTimer] = useState<number>(
    PowerUpExpireTimers.One
  );
  const [showPowerUpExpireTimer, setShowPowerUpExpireTimer] =
    useState<boolean>(false);
  const [powerUpPosition, setPowerUpPosition] = useState<string>("center");

  return [
    powerUpShowTimer,
    setPowerUpShowTimer,
    powerUpVisible,
    setPowerUpVisible,
    powerUpExpireTimer,
    setPowerUpExpireTimer,
    showPowerUpExpireTimer,
    setShowPowerUpExpireTimer,
    powerUpPosition,
    setPowerUpPosition,
  ];
};

export default usePowerUp;
