import React from "react";
import ResourceOne from "../ResourceOne";
import ResourceThree from "../ResourceThree";
import ResourceTwo from "../ResourceTwo";
import ResourceFour from "../ResourceFour";
import { Grid, styled } from "@mui/material";
import { COLORS } from "../../../config/colors";
import ResourceFive from "../ResourceFive";
import { observer } from "mobx-react";
import useStat from "../../../hooks/useStat";

const StyledResourcesContainer = styled(Grid)({
  backgroundColor: COLORS.lightTan,
  display: "flex",
  flexDirection: "column",
});

type Props = {};

const ResourcesContainer = (props: Props) => {
  const { tier } = useStat();

  return (
    <StyledResourcesContainer>
      <ResourceOne />
      {tier >= 2 && <ResourceTwo />}
      {tier! >= 3 && <ResourceThree />}
      {tier! >= 4 && <ResourceFour />}
      {tier! >= 5 && <ResourceFive />}
    </StyledResourcesContainer>
  );
};

export default observer(ResourcesContainer);
