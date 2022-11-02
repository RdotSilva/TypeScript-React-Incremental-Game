import React, { useContext } from "react";
import { Container } from "@mui/material";
import { StatContext } from "../../context/GameContext";
import Button from "@mui/material/Button";

type Props = {};

const PowerUp = (props: Props) => {
  const statContext = useContext(StatContext);

  return (
    <Container sx={{ background: "brown" }}>
      <Button
        sx={{ m: 1 }}
        onClick={() => console.log("Powerup Activatd")}
        variant="contained"
      >
        Power Up
      </Button>
    </Container>
  );
};

export default PowerUp;
