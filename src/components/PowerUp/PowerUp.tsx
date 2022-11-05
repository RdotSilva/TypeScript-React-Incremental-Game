import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import Button from "@mui/material/Button";

type Props = {};

const PowerUp = (props: Props) => {
  const statContext = useContext(StatContext);
  const { setPowerUpMultiplier } = statContext;

  // Power up should be shown once every minute (will do 5 seconds for testing purposes)
  const [powerUpTimer, setPowerUpTimer] = useState<number>(5000);
  const [powerUpVisible, setPowerUpVisible] = useState<boolean>(false);

  useEffect(() => {
    // Timer should only restart after that power up is complete
    let displayPowerUpTimeout = setTimeout(() => {
      setPowerUpVisible(true);
    }, powerUpTimer);

    return () => {
      clearTimeout(displayPowerUpTimeout);
    };
  }, []);

  const activatePowerUp = () => {
    // TODO: Display clock while powerup is active
    setPowerUpVisible(false);
    setPowerUpMultiplier(2);

    let deactivatePowerUpTimeout = setTimeout(() => {
      deactivatePowerUp();
    }, 5000);
  };

  const deactivatePowerUp = () => {
    setPowerUpMultiplier(1);
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
