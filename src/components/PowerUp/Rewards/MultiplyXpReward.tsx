import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { MultiplyXpPowerUpReward } from "../../../config/config";
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

  const {
    powerUpVisible,
    setPowerUpVisible,
    powerUpPosition,
    displayPowerUpInterval,
    displayDoubleXp,
    randomizePowerUpLocation,
  } = usePowerUp();

  useEffect(() => {
    const randomMultiplier = getRandomObjectProperty(MultiplyXpPowerUpReward);
    setRandomMultiplierAmount(randomMultiplier);
  }, []);

  /**
   * Randomize the power up button location any time the power up changes visibility
   */
  useEffect(() => {
    randomizePowerUpLocation();
  }, [randomizePowerUpLocation, powerUpVisible]);

  const { setTotalStats } = useStat();

  useInterval(() => {
    setPowerUpVisible(true);
    console.log(displayDoubleXp);
  }, displayDoubleXp);

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
