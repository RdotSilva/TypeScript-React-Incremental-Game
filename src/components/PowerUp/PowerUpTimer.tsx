import React, { useContext } from "react";
import { StatContext } from "../../context/StatContext";

type Props = {};

const PowerUpTimer = (props: Props) => {
  const statContext = useContext(StatContext);
  const { powerUpTimer } = statContext;

  return <div>{powerUpTimer / 1000}</div>;
};

export default PowerUpTimer;
