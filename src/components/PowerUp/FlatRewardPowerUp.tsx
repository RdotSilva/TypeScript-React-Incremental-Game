import React, { useContext, useEffect, useState, useCallback } from "react";
import { Container, Box } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import Button from "@mui/material/Button";
import {
  FlatRewardPowerUpBonus,
  PowerUpExpireTimers,
  PowerUpShowTimers,
} from "../../config/config";
import { ResponsiveStyleValue } from "@mui/system";
import usePowerUp from "../../hooks/usePowerUp";

type Props = {};

const FlatRewardPowerUp = (props: Props) => {
  const [
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
  ] = usePowerUp();

  const statContext = useContext(StatContext);
  const { setPowerUpMultiplier, setTotalStats } = statContext;

  useEffect(() => {
    setPowerUpVisible(true);
  });

  const activatePowerUp = () => {
    setTotalStats(
      (prevTotalStats) => prevTotalStats * FlatRewardPowerUpBonus.One
    );
  };

  return (
    <Container sx={{ background: "#ede7d5" }}>
      {powerUpVisible && (
        <Box textAlign={powerUpPosition}>
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

export default FlatRewardPowerUp;
