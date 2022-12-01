import React from "react";
import { Button, Grid, styled } from "@mui/material";
import { COLORS } from "../../config/colors";
import usePrestige from "../../hooks/usePrestige";

const StyledPrestigeContainer = styled(Grid)({
  backgroundColor: COLORS.lightTan,
  display: "flex",
  justifyContent: "center",
});

type Props = {};

const Prestige = (props: Props) => {
  const { confirmPrestige } = usePrestige();

  return (
    <StyledPrestigeContainer>
      <Button
        color="secondary"
        sx={{ m: 1 }}
        onClick={() => confirmPrestige()}
        variant="contained"
      >
        Prestige
      </Button>
    </StyledPrestigeContainer>
  );
};

export default Prestige;
