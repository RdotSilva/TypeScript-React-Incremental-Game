import React, { useContext, useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import { StatContext } from "../../context/StatContext";

type Props = {};

const TotalScore = (props: Props) => {
  const statContext = useContext(StatContext);
  const { totalStats } = statContext;

  return (
    <Box
      sx={{
        backgroundColor: "#d4cebe",
        display: "flex",
        justifyContent: "center",
        fontSize: "h2.fontSize",
        fontFamily: "Monospace",
      }}
    >
      {totalStats}
    </Box>
  );
};

export default TotalScore;
