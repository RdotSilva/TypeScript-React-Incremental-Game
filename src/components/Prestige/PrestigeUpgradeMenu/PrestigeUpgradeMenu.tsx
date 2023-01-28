import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { Button } from "@mui/material";
import { COLORS } from "../../../config/colors";
import usePrestige from "../../../hooks/usePrestige";
import PrestigeMenuItem from "../PrestigeMenuItem/PrestigeMenuItem";
import { PrestigeItem } from "../../../config/prestige";
import { observer } from "mobx-react";

const PrestigeUpgradeMenu = () => {
  const [showPrestigeMenu, setShowPrestigeMenu] = useState<boolean>(false);
  const { assignedPrestigePoints, totalPrestigePoints, prestigeStats } =
    usePrestige();
  const [unassignedPrestigePoints, setUnassignedPrestigePoints] =
    useState<number>(0);

  /**
   * Calculate the total number of unused prestige points and update state
   */
  // TODO: Test logic around totalPrestigePoints after changing to MobX store
  useEffect(() => {
    const currentUnassignedPrestigePoints =
      totalPrestigePoints - assignedPrestigePoints;
    setUnassignedPrestigePoints(currentUnassignedPrestigePoints);
  }, [totalPrestigePoints, assignedPrestigePoints]);

  return (
    <>
      <Button
        onClick={() => setShowPrestigeMenu(!showPrestigeMenu)}
        color="secondary"
        variant="contained"
      >
        Prestige Menu
      </Button>
      {showPrestigeMenu ? (
        <List sx={{ width: "100%", bgcolor: COLORS.darkTan }}>
          <ListItem
            sx={{
              fontSize: "h5.fontSize",
              fontFamily: "Monospace",
            }}
          >
            Prestige Points {assignedPrestigePoints} / {totalPrestigePoints}{" "}
            total points assigned.
          </ListItem>
          {prestigeStats.map((prestigeItem: PrestigeItem, index: number) => (
            <PrestigeMenuItem
              key={index}
              {...prestigeItem}
              icon={<prestigeItem.icon />}
            />
          ))}
        </List>
      ) : null}
    </>
  );
};

export default observer(PrestigeUpgradeMenu);
