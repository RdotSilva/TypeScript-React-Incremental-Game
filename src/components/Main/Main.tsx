import React, { useContext } from "react";
import { Container, Grid, styled } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import TotalScore from "../Score/TotalScore";
import PowerUps from "../PowerUp/PowerUps";
import Resources from "../Resources/ResourcesContainer/ResourcesContainer";
import { COLORS } from "../../config/colors";
import PowerUpTimer from "../PowerUp/PowerUpTimer";
import Prestige from "../Prestige/Prestige";

const StyledMainContainer = styled(Grid)({
  border: "2px solid",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  backgroundColor: COLORS.lightTan,
});

type Props = {};

const Main = (props: Props) => {
  const statContext = useContext(StatContext);
  const { totalStats } = statContext;

  return (
    <StyledMainContainer container>
      <TotalScore />
      <PowerUpTimer />
      {/* TODO: Add value to config */}
      {totalStats > 100 ? <Prestige /> : null}
      <Resources />
      <PowerUps />
    </StyledMainContainer>
  );
};

export default Main;
