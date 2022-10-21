import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";

type Props = {};

const Main = (props: Props) => {
  const [goldStats, setGoldStats] = useState({
    gold: 0,
    goldPerClick: 1,
  });

  const incrementGold = () => {
    setGoldStats({ gold: goldStats.gold + 1, goldPerClick: 1 });
  };

  return (
    <Container>
      <Box component="span" sx={{ display: "block" }}>
        {goldStats.gold}
      </Box>

      <Button onClick={incrementGold} variant="contained">
        Mine Gold
      </Button>
    </Container>
  );
};

export default Main;
