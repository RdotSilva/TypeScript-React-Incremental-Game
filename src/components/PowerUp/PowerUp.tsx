import React, { useContext, useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import Button from "@mui/material/Button";
import { PowerUpExpireTimers, PowerUpShowTimers } from "../../config/config";
import { ResponsiveStyleValue } from "@mui/system";
import usePowerUp from "../../hooks/usePowerUp";

type Props = {};

const PowerUp = (props: Props) => {
  const [
    powerUpShowTimer,
    setPowerUpShowTimer,
    powerUpVisible,
    setPowerUpVisible,
    powerUpExpireTimer,
    setPowerUpExpireTimer,
    showPowerUpExpireTimer,
    setShowPowerUpExpireTimer,
  ] = usePowerUp();

  const statContext = useContext(StatContext);
  const { setPowerUpMultiplier } = statContext;

  useEffect(() => {
    // Update the interval if the power up has been clicked we need to add that time to the interval
    const displayPowerUpInterval = !showPowerUpExpireTimer
      ? powerUpShowTimer
      : powerUpShowTimer + powerUpExpireTimer;

    let displayPowerUpTimeout = setInterval(() => {
      setPowerUpVisible(true);
    }, displayPowerUpInterval);

    return () => {
      clearInterval(displayPowerUpTimeout);
    };
  }, [powerUpShowTimer, powerUpExpireTimer]);

  useEffect(() => {
    let timer: any =
      powerUpExpireTimer > 0 &&
      showPowerUpExpireTimer &&
      setInterval(() => setPowerUpExpireTimer(powerUpExpireTimer - 1000), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [powerUpExpireTimer, showPowerUpExpireTimer]);

  const activatePowerUp = () => {
    // TODO: Display clock while powerup is active
    setPowerUpVisible(false);
    setPowerUpMultiplier(2);

    // Shower timer for now
    setShowPowerUpExpireTimer(true);

    let deactivatePowerUpTimeout = setTimeout(() => {
      deactivatePowerUp();
    }, PowerUpExpireTimers.One);
  };

  const deactivatePowerUp = () => {
    setPowerUpMultiplier(1);
    setShowPowerUpExpireTimer(false);
    setPowerUpExpireTimer(PowerUpExpireTimers.One);
  };

  const randomizePowerupButtonLocation = () => {
    const possiblePositions = ["left", "center", "right"];
    const randomPosition =
      possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    return randomPosition as ResponsiveStyleValue<any>;
  };

  return (
    <Container sx={{ background: "brown" }}>
      {showPowerUpExpireTimer && (
        <div>PowerUp Timer: {powerUpExpireTimer / 1000}</div>
      )}
      {powerUpVisible && !showPowerUpExpireTimer && (
        <Box textAlign={randomizePowerupButtonLocation()}>
          <Button
            sx={{ m: 1 }}
            onClick={() => activatePowerUp()}
            variant="contained"
          >
            Power Up
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default PowerUp;
