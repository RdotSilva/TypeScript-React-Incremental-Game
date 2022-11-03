import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { StatContext } from "../../context/GameContext";
import Button from "@mui/material/Button";

type Props = {};

const PowerUp = (props: Props) => {
  const statContext = useContext(StatContext);

  // Power up should be shown once every minute (will do 5 seconds for testing purposes)
  const [powerUpTimer, setPowerUpTimer] = useState<number>(5000);
  const [powerUpVisible, setPowerUpVisible] = useState<boolean>(false);

  useEffect(() => {
    // Timer should only restart after that power up is complete
    let powerUpTimeout = setTimeout(() => {
      setPowerUpVisible(true);
    }, powerUpTimer);

    return () => {
      clearTimeout(powerUpTimeout);
    };
  });

  const activatePowerUp = () => {
    console.log("PowerUp Activated!!");
    setPowerUpVisible(false);
    // When power up is clicked we should reset this timer
    // Power up should increase the stats per click
  };

  return (
    <Container sx={{ background: "brown" }}>
      {powerUpVisible && (
        <Button
          sx={{ m: 1 }}
          onClick={() => activatePowerUp()}
          variant="contained"
        >
          Power Up
        </Button>
      )}
    </Container>
  );
};

export default PowerUp;
