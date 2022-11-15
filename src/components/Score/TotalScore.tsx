import React, { useContext, useEffect, useState, useCallback } from "react";
import { Box, Grid } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import { COLORS } from "../../config/colors";

type Props = {};

const TotalScore = (props: Props) => {
  const statContext = useContext(StatContext);
  const { totalStats } = statContext;

  return (
    <Grid
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
  );
};

export default TotalScore;
