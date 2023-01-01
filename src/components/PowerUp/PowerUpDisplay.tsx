import { Container, styled } from "@mui/system";
import React from "react";
import { COLORS } from "../../config/colors";
import FlatRewardPowerUp from "./FlatRewardPowerUp";
import PowerUp from "./PowerUp";

type Props = {};

const PowerUpContainer = styled(Container)({
  backgroundColor: COLORS.lightTan,
});

const PowerUpDisplay = (props: Props) => {
  return (
    <PowerUpContainer>
      <PowerUp />
      <FlatRewardPowerUp />
    </PowerUpContainer>
  );
};

export default PowerUpDisplay;
