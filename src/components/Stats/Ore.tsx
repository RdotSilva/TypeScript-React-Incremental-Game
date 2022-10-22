import React, { useState } from "react";
import useStat from "../../hooks/useStat";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";

type Props = {};

const Ore = (props: Props) => {
  const [stat, statPerClick, incrementStat, incrementStatPerClick] = useStat();

  return (
    <Container>
      <Box component="span" sx={{ display: "block" }}>
        <div>{stat}</div>
      </Box>

      <Button onClick={() => incrementStat(1)} variant="contained">
        Mine Ore
      </Button>
      
    </Container>
  );
};

export default Ore;
