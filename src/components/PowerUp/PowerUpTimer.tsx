import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React, { useContext } from "react";
import { COLORS } from "../../config/colors";
import { StatContext } from "../../context/StatContext";

const StyledPowerUpTimerDisplayContainer = styled(Grid)({
  backgroundColor: COLORS.lightPurple,
  display: "flex",
  justifyContent: "center",
  fontSize: "25px",
  width: "100%",
});

type Props = {};

const PowerUpTimer = (props: Props) => {
  const statContext = useContext(StatContext);
  const { powerUpTimer } = statContext;

  return (
    <StyledPowerUpTimerDisplayContainer item>
      {`2x XP: ${powerUpTimer / 1000}`}
    </StyledPowerUpTimerDisplayContainer>
  );
};

export default PowerUpTimer;
