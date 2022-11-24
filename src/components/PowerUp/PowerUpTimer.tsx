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
});

type Props = {};

const PowerUpTimer = (props: Props) => {
  const statContext = useContext(StatContext);
  const { powerUpTimer } = statContext;

  return (
    <StyledPowerUpTimerDisplayContainer item>
      <Grid item>Current Bonus: </Grid>
      <Grid item>
        {powerUpTimer > 0 ? `2x XP for ${powerUpTimer / 1000} seconds` : `None`}
      </Grid>
    </StyledPowerUpTimerDisplayContainer>
  );
};

export default PowerUpTimer;
