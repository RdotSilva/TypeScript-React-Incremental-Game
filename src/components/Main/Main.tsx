import React, { useContext } from "react";
import { Container } from "@mui/material";
import Ore from "../Stats/Ore";
import Tree from "../Stats/Tree";
import { StatContext } from "../../context/GameContext";

type Props = {};

const Main = (props: Props) => {
  const statContext = useContext(StatContext);
  return (
    <Container>
      <Ore />
      {statContext?.tier === 2 && <Tree />}
    </Container>
  );
};

export default Main;
