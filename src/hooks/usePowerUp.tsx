import React, { useContext, useState, useMemo, useEffect } from "react";
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
    setDisplayDoubleXp
  };
};

export default usePowerUp;
