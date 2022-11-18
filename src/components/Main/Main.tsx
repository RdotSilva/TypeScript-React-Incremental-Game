import React, { useContext } from "react";
import { Container, styled } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import TotalScore from "../Score/TotalScore";
import PowerUps from "../PowerUp/PowerUps";
import Resources from "../Resources/ResourcesContainer/ResourcesContainer";
import { COLORS } from "../../config/colors";

const StyledMainContainer = styled(Container)({
  border: "2px solid red",
  display: "flex",
  flexDirection: "column",
  backgroundColor: COLORS.lightTan,
});

type Props = {};

const Main = (props: Props) => {
  const statContext = useContext(StatContext);

  return (
    <StyledMainContainer>
      <TotalScore />
      <Resources />
      <PowerUps />
    </StyledMainContainer>
  );
};

export default Main;
