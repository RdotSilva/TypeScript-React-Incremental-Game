import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import React, { useContext } from "react";
import { COLORS } from "../../../config/colors";
import { StatContext } from "../../../context/StatContext";

const StyledPowerUpTimerDisplayContainer = styled(Grid)({
  backgroundColor: COLORS.lightPurple,
  display: "flex",
  justifyContent: "center",
  border: `1px solid ${COLORS.darkTan}`,
});

type Props = {};

const PowerUpTimerDisplay = (props: Props) => {
  const statContext = useContext(StatContext);
  const { powerUpTimer } = statContext;

  return (
    <StyledPowerUpTimerDisplayContainer container>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "h5.fontSize",
          fontFamily: "Monospace",
        }}
      >
        Current Bonus:{" "}
        {powerUpTimer > 0 ? `2x XP for ${powerUpTimer / 1000} seconds` : `None`}
      </Grid>
    </StyledPowerUpTimerDisplayContainer>
  );
};

export default PowerUpTimerDisplay;
