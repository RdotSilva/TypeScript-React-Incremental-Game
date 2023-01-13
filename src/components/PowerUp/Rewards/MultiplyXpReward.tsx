import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { DoubleXpPowerUpReward } from "../../../config/config";
import usePowerUp from "../../../hooks/usePowerUp";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../../config/colors";
import useStat from "../../../hooks/useStat";
import useInterval from "../../../hooks/useInterval";
import { getRandomObjectProperty } from "../../../utils";

type Props = {};

const MultiplyXpReward = (props: Props) => {
  const [randomMultiplierAmount, setRandomMultiplierAmount] =
    useState<number>(0);

  useEffect(() => {
    const randomMultiplier = getRandomObjectProperty(DoubleXpPowerUpReward);
    setRandomMultiplierAmount(randomMultiplier);
  }, []);

  const {
    powerUpVisible,
    setPowerUpVisible,
    powerUpPosition,
    displayPowerUpInterval,
  } = usePowerUp();

  const { setTotalStats } = useStat();

  useInterval(() => {
    setPowerUpVisible(true);
  }, displayPowerUpInterval);

  /**
   * Automatically increase users total score by a using a flat multiplier
   * @param flatRewardMultiplier Multiplier for the flat reward
   */
  const activatePowerUp = (flatRewardMultiplier: number) => {
    setTotalStats(
      (prevTotalStats: number) => prevTotalStats * flatRewardMultiplier
    );
    setPowerUpVisible(false);
  };

  const PowerUpContainer = styled(Grid)({
    backgroundColor: COLORS.lightTan,
  });

  return (
    <PowerUpContainer>
      {powerUpVisible && (
        <Box textAlign={powerUpPosition}>
          <Button
            sx={{ m: 1 }}
            onClick={() => activatePowerUp(randomMultiplierAmount)}
            variant="contained"
          >
            {`Multiply total XP by ${randomMultiplierAmount}`}
          </Button>
        </Box>
      )}
    </PowerUpContainer>
  );
};

export default MultiplyXpReward;
