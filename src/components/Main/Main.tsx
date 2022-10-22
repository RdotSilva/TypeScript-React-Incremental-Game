import React from "react";
import { Container } from "@mui/material";
import Gold from "../Stats/Ore";
import Tree from "../Stats/Tree";

type Props = {};

const Main = (props: Props) => {
  return (
    <Container>
      <Gold />
      <Tree />
    </Container>
  );
};

export default Main;
