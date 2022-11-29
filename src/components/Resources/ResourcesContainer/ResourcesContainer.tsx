import React, { useContext } from "react";
import { StatContext } from "../../../context/StatContext";
import ResourceOne from "../ResourceOne";
import ResourceThree from "../ResourceThree";
import ResourceTwo from "../ResourceTwo";
import ResourceFour from "../ResourceFour";
import { Grid, styled } from "@mui/material";
import { COLORS } from "../../../config/colors";
import ResourceFive from "../ResourceFive";

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
      <ResourceOne />
      {statContext?.tier! >= 2 && <ResourceTwo />}
      {statContext?.tier! >= 3 && <ResourceThree />}
      {statContext?.tier! >= 4 && <ResourceFour />}
      {statContext?.tier! >= 5 && <ResourceFive />}
    </StyledResourcesContainer>
  );
};

export default ResourcesContainer;
