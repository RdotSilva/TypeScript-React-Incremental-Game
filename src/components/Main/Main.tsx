import React, { useContext } from "react";
import { Grid, styled } from "@mui/material";
import TotalScore from "../Score/TotalScore";
import PowerUps from "../PowerUp/PowerUps";
import Resources from "../Resources/ResourcesContainer/ResourcesContainer";
import { COLORS } from "../../config/colors";
import PowerUpTimerDisplay from "../PowerUp/PowerUpTimerDisplay";
import PrestigeDialog from "../Prestige/PrestigeDialog/PrestigeDialog";
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
  const prestigeContext = useContext(PrestigeContext);
  const { prestigeLevel } = prestigeContext;

  const { showPrestigeButton } = usePrestige();

  return (
    <StyledMainContainer container>
      <TotalScore />
      <PowerUpTimerDisplay />
      {prestigeLevel > PrestigeLevelToShowMenu ? <PrestigeMenu /> : null}
      {showPrestigeButton ? <PrestigeDialog /> : null}
      <Resources />
      <PowerUps />
    </StyledMainContainer>
  );
};

export default Main;
