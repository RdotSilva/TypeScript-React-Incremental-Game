import { Container, styled } from "@mui/system";
import React from "react";
import { COLORS } from "../../config/colors";
import DoubleXpReward from "./Rewards/DoubleXpReward";
import PowerUp from "./PowerUp";

type Props = {};

const PowerUpContainer = styled(Container)({
  backgroundColor: COLORS.lightTan,
});

const PowerUpDisplay = (props: Props) => {
  return (
    <PowerUpContainer>
      <PowerUp />
      <DoubleXpReward />
    </PowerUpContainer>
  );
};

export default PowerUpDisplay;
