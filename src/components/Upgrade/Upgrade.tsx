import React from "react";

import Button from "@mui/material/Button";

type Props = {
  statTotal: number;
  totalUpgrades: number;
  upgrade: (amount: number) => void;
};

/**
 * Render the upgrade buttons when certain thresholds are hit for each stat
 */
const Upgrade = ({ statTotal, totalUpgrades, upgrade }: Props) => {
  return (
    <>
      {statTotal >= 10 && totalUpgrades <= 0 && (
        <Button sx={{ m: 1 }} onClick={() => upgrade(1)} variant="contained">
          Upgrade 1
        </Button>
      )}
      {statTotal >= 100 && totalUpgrades <= 1 && (
        <Button sx={{ m: 1 }} onClick={() => upgrade(2)} variant="contained">
          Upgrade 2
        </Button>
      )}

      {statTotal >= 1000 && totalUpgrades <= 1 && (
        <Button sx={{ m: 1 }} onClick={() => upgrade(3)} variant="contained">
          Upgrade 3
        </Button>
      )}
    </>
  );
};

export default Upgrade;
