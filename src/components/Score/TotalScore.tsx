import React from "react";
import { Grid } from "@mui/material";

import { COLORS } from "../../config/colors";
import { styled } from "@mui/system";
import { observer } from "mobx-react";
import { useStore } from "../../store";

type Props = {};

const StyledScoreContainer = styled(Grid)({
  backgroundColor: COLORS.lightTan,
  display: "flex",
  justifyContent: "center",
});

const TotalScore = (props: Props) => {
  const store = useStore();

  const {
    statStore: { totalStats },
  } = store;

  return (
    <StyledScoreContainer container>
      <Grid
        className="total-stats"
        xs={2}
        item
        sx={{
          backgroundColor: COLORS.darkTan,
          display: "flex",
          justifyContent: "center",
          fontSize: "h2.fontSize",
          fontFamily: "Monospace",
        }}
      >
        {totalStats}
      </Grid>
    </StyledScoreContainer>
  );
};

export default observer(TotalScore);
