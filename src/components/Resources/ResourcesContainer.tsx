import React, { useContext } from "react";
import { StatContext } from "../../context/StatContext";
import Ore from "../Stats/Ore";
import Skull from "../Stats/Skull";
import Tree from "../Stats/Tree";
import Brain from "../Stats/Brain";
import { Grid, styled } from "@mui/material";
import { Container } from "@mui/system";
import { COLORS } from "../../config/colors";

const StyledResourcesContainer = styled(Grid)({
  backgroundColor: COLORS.lightTan,
  display: "flex",
  flexDirection: "column",
});

type Props = {};

const ResourcesContainer = (props: Props) => {
  const statContext = useContext(StatContext);

  return (
    <StyledResourcesContainer>
      <Grid>
        <Ore />
        {statContext?.tier! >= 2 && <Tree />}
        {statContext?.tier! >= 3 && <Skull />}
        {statContext?.tier! >= 4 && <Brain />}
      </Grid>
    </StyledResourcesContainer>
  );
};

export default ResourcesContainer;
