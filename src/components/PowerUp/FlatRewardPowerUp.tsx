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
import { styled, useTheme } from "@mui/material/styles";
import { COLORS } from "../../config/colors";
import useStat from "../../hooks/useStat";

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

  const { setTotalStats } = useStat();

  useEffect(() => {
    setPowerUpVisible(true);
  });

  const activatePowerUp = () => {
    setTotalStats(
      (prevTotalStats: number) => prevTotalStats * FlatRewardPowerUpBonus.One
    );
  };

  const PowerUpContainer = styled(Container)({
    backgroundColor: COLORS.lightTan,
  });

  return (
    <PowerUpContainer>
      {powerUpVisible && (
        <Box textAlign={powerUpPosition}>
          <Button
            sx={{ m: 1 }}
            onClick={() => activatePowerUp()}
            variant="contained"
          >
            Double Total XP
          </Button>
        </Box>
      )}
    </PowerUpContainer>
  );
};

export default FlatRewardPowerUp;
