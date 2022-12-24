import React, { useState } from "react";
import {
  Button,
  Grid,
  styled,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { COLORS } from "../../config/colors";
import usePrestige from "../../hooks/usePrestige";

const StyledPrestigeContainer = styled(Grid)({
  backgroundColor: COLORS.lightTan,
  display: "flex",
  justifyContent: "center",
});

type Props = {};

const Prestige = (props: Props) => {
  const [openPrestigeConfirmationModal, setOpenPrestigeConfirmationModal] =
    useState(false);

  const { confirmPrestige } = usePrestige();

  const onClickOpenPrestigeConfirmationModal = () => {
    setOpenPrestigeConfirmationModal(true);
  };

  const onClickClosePrestigeConfirmationModal = () => {
    setOpenPrestigeConfirmationModal(false);
  };

  return (
    <StyledPrestigeContainer>
      <Button
        color="secondary"
        sx={{ m: 1 }}
        onClick={onClickOpenPrestigeConfirmationModal}
        variant="contained"
      >
        Prestige
      </Button>
      <Dialog
        PaperProps={{
          style: { backgroundColor: COLORS.lightTan },
        }}
        open={openPrestigeConfirmationModal}
        onClose={onClickClosePrestigeConfirmationModal}
        aria-labelledby="confirm-prestige-dialog-title"
        aria-describedby="confirm-prestige-dialog-description"
      >
        <DialogTitle id="confirm-prestige-dialog-title">
          Are you sure you want to prestige?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-prestige-dialog-description">
            WARNING: Confirm prestige will reset your total stats and all
            individual resource stats back to 0. You will gain prestige points
            that can be used to make your next play through quicker.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickClosePrestigeConfirmationModal}>
            Go Back
          </Button>
          <Button onClick={confirmPrestige} autoFocus>
            Confirm Prestige
          </Button>
        </DialogActions>
      </Dialog>
    </StyledPrestigeContainer>
  );
};

export default Prestige;
