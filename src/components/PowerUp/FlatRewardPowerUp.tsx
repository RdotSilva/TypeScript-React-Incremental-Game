import React, { useContext, useEffect, useState, useCallback } from "react";
import { Container, Box } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import Button from "@mui/material/Button";
import { PowerUpExpireTimers, PowerUpShowTimers } from "../../config/config";
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
  const { setPowerUpMultiplier } = statContext;

  const activatePowerUp = () => {
    // TODO: Increase max score by flat amount (need to decide on values for this, and it should scale with current score)
  };

  return (
    <Container sx={{ background: "brown" }}>
      {powerUpVisible && !showPowerUpExpireTimer && (
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
