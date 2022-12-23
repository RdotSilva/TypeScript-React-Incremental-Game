import React, { useContext } from "react";
import { Container, Grid, styled } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import TotalScore from "../Score/TotalScore";
import PowerUps from "../PowerUp/PowerUps";
import Resources from "../Resources/ResourcesContainer/ResourcesContainer";
import { COLORS } from "../../config/colors";
import PowerUpTimer from "../PowerUp/PowerUpTimer";
import Prestige from "../Prestige/Prestige";
import { PrestigeContext } from "../../context/PrestigeContext";
import PrestigeMenu from "../Prestige/PrestigeMenu/PrestigeMenu";
import { PrestigeLevelToShowMenu } from "../../config/prestige";
import usePrestige from "../../hooks/usePrestige";

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

  const prestigeContext = useContext(PrestigeContext);
  const { prestigeLevel } = prestigeContext;

  const { showPrestigeButton } = usePrestige();

  return (
    <StyledMainContainer container>
      <TotalScore />
      <PowerUpTimer />
      {prestigeLevel > PrestigeLevelToShowMenu ? <PrestigeMenu /> : null}
      {showPrestigeButton ? <Prestige /> : null}
      <Resources />
      <PowerUps />
    </StyledMainContainer>
  );
};

export default Main;
