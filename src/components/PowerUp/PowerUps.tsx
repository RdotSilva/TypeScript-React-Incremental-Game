import { Container, styled } from "@mui/system";
import React from "react";
import FlatRewardPowerUp from "./FlatRewardPowerUp";
import PowerUp from "./PowerUp";

type Props = {};

const PowerUpContainer = styled(Container)({
  backgroundColor: "aliceblue",
});

const PowerUps = (props: Props) => {
  return (
    <PowerUpContainer>
      <PowerUp />
      <FlatRewardPowerUp />
    </PowerUpContainer>
  );
};

export default PowerUps;
