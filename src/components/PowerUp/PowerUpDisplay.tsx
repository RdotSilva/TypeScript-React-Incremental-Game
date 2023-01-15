import { Container, styled } from "@mui/system";
import React from "react";
import { COLORS } from "../../config/colors";
import MultiplyXpReward from "./Rewards/MultiplyXpReward";
import DoubleXpReward from "./Rewards/DoubleXpReward";

type Props = {};

const PowerUpContainer = styled(Container)({
  backgroundColor: COLORS.lightTan,
});

const PowerUpDisplay = (props: Props) => {
  return (
    <PowerUpContainer>
      <DoubleXpReward />
      <MultiplyXpReward />
    </PowerUpContainer>
  );
};

export default PowerUpDisplay;
