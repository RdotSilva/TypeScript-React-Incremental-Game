import React, { useEffect } from "react";
import { Container, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { PowerUpExpireTimers } from "../../../config/config";
import usePowerUp from "../../../hooks/usePowerUp";
import { COLORS } from "../../../config/colors";
import useStat from "../../../hooks/useStat";
import { observer } from "mobx-react";

type Props = {};

const DoubleXpReward = (props: Props) => {
  const {
    powerUpShowTimer,
    powerUpVisible,
    setPowerUpVisible,
    powerUpTimer,
    setPowerUpTimer,
    showPowerUpExpireTimer,
    setShowPowerUpExpireTimer,
    powerUpPosition,
    setPowerUpPosition,
    randomizePowerUpLocation,
  } = usePowerUp();

  const { setPowerUpMultiplier } = useStat();

  /**
   * Create an interval to display or hide the 2x XP power up button
   */
  useEffect(() => {
    // Update the interval if the power up has been clicked we need to add that time to the interval
    const displayPowerUpInterval = !showPowerUpExpireTimer
      ? powerUpShowTimer
      : powerUpShowTimer + powerUpTimer;

    let displayPowerUpTimeout = setInterval(() => {
      setPowerUpVisible(true);
    }, displayPowerUpInterval);

    return () => {
      clearInterval(displayPowerUpTimeout);
    };
  }, [
    powerUpShowTimer,
    powerUpTimer,
    setPowerUpVisible,
    showPowerUpExpireTimer,
  ]);

  /**
   * Enable 2x XP for a set amount of time
   * @param powerUpTime Number of miliseconds that should elapse before the power up bonus stops
   */
  const activatePowerUp = (powerUpTime: number) => {
    setPowerUpVisible(false);
    setPowerUpMultiplier(2);
    setPowerUpTimer(powerUpTime);
    setShowPowerUpExpireTimer(true);

    let deactivatePowerUpTimeout = setTimeout(() => {
      deactivatePowerUp();
    }, PowerUpExpireTimers.One);
  };

  /**
   * Disable 2x XP
   */
  const deactivatePowerUp = () => {
    setPowerUpMultiplier(1);
    setShowPowerUpExpireTimer(false);
    setPowerUpTimer(0);
  };

  /**
   * Randomize the power up button location any time the power up changes visibility
   */
  useEffect(() => {
    randomizePowerUpLocation();
  }, [randomizePowerUpLocation, powerUpVisible]);

  /**
   * Set the timer for power up expiration once it has been activated
   */
  useEffect(() => {
    let timer: any =
      powerUpTimer > 0 &&
      showPowerUpExpireTimer &&
      setInterval(() => setPowerUpTimer(powerUpTimer - 1000), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [powerUpTimer, showPowerUpExpireTimer, setPowerUpTimer]);

  return (
    <Container sx={{ background: COLORS.lightTan }}>
      {powerUpVisible && !showPowerUpExpireTimer && (
        <Box textAlign={powerUpPosition}>
          <Button
            sx={{ m: 1 }}
            onClick={() => activatePowerUp(PowerUpExpireTimers.One)}
            variant="contained"
          >
            2x XP
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default observer(DoubleXpReward);
