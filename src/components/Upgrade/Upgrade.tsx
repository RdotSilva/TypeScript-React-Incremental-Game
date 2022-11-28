import React from "react";

import Button from "@mui/material/Button";
import { UpgradeLevels } from "../../config/config";
import { styled } from "@mui/material";

type Props = {
  statTotal: number;
  totalUpgrades: number;
  amountToShowUpgradeMultiplier: number;
  upgrade: (amount: number) => void;
};

const StyledUpgradeButton = styled(Button)({
  margin: "5px",
});

/**
 * Render the upgrade buttons when certain thresholds are hit for each stat
 */
const Upgrade = ({
  statTotal,
  totalUpgrades,
  amountToShowUpgradeMultiplier,
  upgrade,
}: Props) => {
  return (
    <>
      {statTotal >= amountToShowUpgradeMultiplier * UpgradeLevels.One &&
        totalUpgrades <= 0 && (
          <StyledUpgradeButton onClick={() => upgrade(1)} variant="contained">
            x2 per click
          </StyledUpgradeButton>
        )}
      {statTotal >= amountToShowUpgradeMultiplier * UpgradeLevels.Two &&
        totalUpgrades <= 1 && (
          <StyledUpgradeButton onClick={() => upgrade(2)} variant="contained">
            x2 per click
          </StyledUpgradeButton>
        )}
      {statTotal >= amountToShowUpgradeMultiplier * UpgradeLevels.Three &&
        totalUpgrades <= 2 && (
          <StyledUpgradeButton onClick={() => upgrade(3)} variant="contained">
            Auto Click
          </StyledUpgradeButton>
        )}
    </>
  );
};

export default Upgrade;
