import React, { useContext, useEffect, useState, useCallback } from "react";
import { Box, Grid } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import { COLORS } from "../../config/colors";
import { styled } from "@mui/system";

type Props = {};

const StyledScoreContainer = styled(Grid)({
  backgroundColor: COLORS.lightTan,
  display: "flex",
  justifyContent: "center",
});

const TotalScore = (props: Props) => {
  const statContext = useContext(StatContext);
  const { totalStats } = statContext;

  return (
    <StyledScoreContainer container>
      <Grid
        xs={2}
        item
        sx={{
          backgroundColor: COLORS.darkTan,
          display: "flex",
          justifyContent: "center",
          fontSize: "h2.fontSize",
          fontFamily: "Monospace",
        }}
      >
        {totalStats}
      </Grid>
    </StyledScoreContainer>
  );
};

export default TotalScore;
