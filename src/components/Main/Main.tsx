import React from "react";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";

type Props = {};

const Main = (props: Props) => {
  return (
    <Container>
      <Box component="span" sx={{ display: "block" }}>
        Gold
      </Box>

      <Button variant="contained">Mine Gold</Button>
    </Container>
  );
};

export default Main;
