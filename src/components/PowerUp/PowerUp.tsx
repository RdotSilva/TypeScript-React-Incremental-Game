import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { StatContext } from "../../context/GameContext";
import Button from "@mui/material/Button";

type Props = {};

const PowerUp = (props: Props) => {
  const statContext = useContext(StatContext);

  const [powerUpTimer, setPowerUpTimer] = useState<number>(5000);
  const [powerUpVisible, setPowerUpVisible] = useState<boolean>(false);

  useEffect(() => {
    let powerUpTimeout = setTimeout(() => {
      setPowerUpVisible(true);
    }, powerUpTimer);

    return () => {
      clearTimeout(powerUpTimeout);
    };
  });

  // TODO: Implement Powerups
  // Power up should be shown once every minute (will do 10-15 seconds for testing purposes)
  // When power up is clicked we should reset this timer
  // Timer should only restart after that power up is complete
  // Power up should increase the stats per click

  return (
    <Container sx={{ background: "brown" }}>
      {powerUpVisible && (
        <Button
          sx={{ m: 1 }}
          onClick={() => console.log("Powerup Activatd")}
          variant="contained"
        >
          Power Up
        </Button>
      )}
    </Container>
  );
};

export default PowerUp;
