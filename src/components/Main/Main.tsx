import React, { useContext } from "react";
import { Container } from "@mui/material";
import Ore from "../Stats/Ore";
import Tree from "../Stats/Tree";
import { StatContext } from "../../context/GameContext";
import Skull from "../Stats/Skull";

type Props = {};

const Main = (props: Props) => {
  const statContext = useContext(StatContext);

  return (
    <Container sx={{ background: "gray" }}>
      <Ore />
      {statContext?.tier! >= 2 && <Tree />}
      {statContext?.tier! >= 3 && <Skull />}
    </Container>
  );
};

export default Main;
