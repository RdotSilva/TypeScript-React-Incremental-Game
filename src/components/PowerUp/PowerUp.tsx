import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import Button from "@mui/material/Button";
import { PowerUpExpireTimers, PowerUpShowTimers } from "../../config/config";

type Props = {};

const PowerUp = (props: Props) => {
  const statContext = useContext(StatContext);
  const { setPowerUpMultiplier } = statContext;

  // Power up should be shown once every minute (will do 5 seconds for testing purposes)
  const [powerUpShowTimer, setPowerUpShowTimer] = useState<number>(
    PowerUpShowTimers.One
  );
  const [powerUpVisible, setPowerUpVisible] = useState<boolean>(false);
  const [powerUpExpireTimer, setPowerUpExpireTimer] = useState<number>(
    PowerUpExpireTimers.One
  );
  const [showPowerUpExpireTimer, setShowPowerUpExpireTimer] =
    useState<boolean>(false);

  useEffect(() => {
    // Timer should only restart after that power up is complete
    let displayPowerUpTimeout = setInterval(() => {
      setPowerUpVisible(true);
    }, powerUpShowTimer);

    return () => {
      clearInterval(displayPowerUpTimeout);
    };
  }, []);

  useEffect(() => {
    let timer: any =
      powerUpExpireTimer > 0 &&
      showPowerUpExpireTimer &&
      setInterval(() => setPowerUpExpireTimer(powerUpExpireTimer - 1000), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [powerUpExpireTimer, showPowerUpExpireTimer]);

  const activatePowerUp = () => {
    // TODO: Display clock while powerup is active
    setPowerUpVisible(false);
    setPowerUpMultiplier(2);

    // Shower timer for now
    setShowPowerUpExpireTimer(true);

    let deactivatePowerUpTimeout = setTimeout(() => {
      deactivatePowerUp();
    }, PowerUpExpireTimers.One);
  };

  const deactivatePowerUp = () => {
    setPowerUpMultiplier(1);
    setShowPowerUpExpireTimer(false);
    setPowerUpExpireTimer(PowerUpExpireTimers.One);
  };

  return (
    <Container sx={{ background: "brown" }}>
      {showPowerUpExpireTimer && (
        <div>PowerUp Timer: {powerUpExpireTimer / 1000}</div>
      )}
      {powerUpVisible && !showPowerUpExpireTimer && (
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
