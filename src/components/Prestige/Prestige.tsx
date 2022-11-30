import React from "react";
import { Button, Grid, styled } from "@mui/material";
import { COLORS } from "../../config/colors";

const StyledPrestigeContainer = styled(Grid)({
  backgroundColor: COLORS.lightTan,
  display: "flex",
  justifyContent: "center",
});

type Props = {};

const Prestige = (props: Props) => {
  return (
    <StyledPrestigeContainer>
      <Button
        color="secondary"
        sx={{ m: 1 }}
        onClick={() => console.log("Prestige activated!")}
        variant="contained"
      >
        Prestige
      </Button>
    </StyledPrestigeContainer>
  );
};

export default Prestige;
