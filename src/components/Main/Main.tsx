import React, { useContext } from "react";
import { Container, styled } from "@mui/material";
import { StatContext } from "../../context/StatContext";
import TotalScore from "../Score/TotalScore";
import PowerUps from "../PowerUp/PowerUps";
import Resources from "../Resource/Resources";

const StyledMainContainer = styled(Container)({
  border: "2px solid red",
  display: "flex",
  flexDirection: "column",
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
