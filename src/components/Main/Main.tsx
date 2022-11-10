import React, { useContext } from "react";
import { Box, Container } from "@mui/material";
import Ore from "../Stats/Ore";
import Tree from "../Stats/Tree";
import { StatContext } from "../../context/StatContext";
import Skull from "../Stats/Skull";
import Brain from "../Stats/Brain";
import PowerUp from "../PowerUp/PowerUp";
import TotalScore from "../Score/TotalScore";

type Props = {};

const Main = (props: Props) => {
  const statContext = useContext(StatContext);

  return (
    <>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ede7d5",
          }}
        >
          <TotalScore />
          <Ore />
          {statContext?.tier! >= 2 && <Tree />}
          {statContext?.tier! >= 3 && <Skull />}
          {statContext?.tier! >= 4 && <Brain />}
          <PowerUp />
        </Box>
      </div>
    </>
  );
};

export default Main;
