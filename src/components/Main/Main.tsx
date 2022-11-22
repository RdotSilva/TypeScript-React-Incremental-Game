import React, { useContext } from "react";
import { Container, Grid, styled } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import TotalScore from "../Score/TotalScore";
import PowerUps from "../PowerUp/PowerUps";
import Resources from "../Resources/ResourcesContainer/ResourcesContainer";
import { COLORS } from "../../config/colors";
import PowerUpTimer from "../PowerUp/PowerUpTimer";

const StyledMainContainer = styled(Grid)({
  border: "2px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  backgroundColor: COLORS.lightTan,
});

type Props = {};

const Main = (props: Props) => {
  const statContext = useContext(StatContext);

  return (
    <StyledMainContainer container>
      <TotalScore />
      <PowerUpTimer />
      <Resources />
      <PowerUps />
    </StyledMainContainer>
  );
};

export default Main;
