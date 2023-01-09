import React from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { DoubleXpPowerUpReward } from "../../../config/config";
import usePowerUp from "../../../hooks/usePowerUp";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../../config/colors";
import useStat from "../../../hooks/useStat";
import useInterval from "../../../hooks/useInterval";

type Props = {};

const DoubleXpReward = (props: Props) => {
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
            onClick={() => activatePowerUp(DoubleXpPowerUpReward.One)}
            variant="contained"
          >
            Double Total XP
          </Button>
        </Box>
      )}
    </PowerUpContainer>
  );
};

export default DoubleXpReward;
