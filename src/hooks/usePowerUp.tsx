import React, { useContext, useState } from "react";
import { PowerUpExpireTimers, PowerUpShowTimers } from "../config/config";
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
  };
};

export default usePowerUp;
