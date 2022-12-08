import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { Button } from "@mui/material";
import { COLORS } from "../../../config/colors";
import usePrestige from "../../../hooks/usePrestige";
import PrestigeMenuItem from "../PrestigeMenuItem/PrestigeMenuItem";
import { PrestigeItem } from "../../../config/prestige";

type Props = {
  prestigeItems: PrestigeItem[];
};

const PrestigeMenu = ({ prestigeItems }: Props) => {
  const [showPrestigeMenu, setShowPrestigeMenu] = useState<boolean>(false);
  const { assignedPrestigePoints, totalPrestigePoints } = usePrestige();
  const [unusedPrestigePoints, setUnusedPrestigePoints] = useState<number>(0);

  /**
   * Calculate the total number of unused prestige points and update state
   */
  useEffect(() => {
    const unusedPoints = totalPrestigePoints - assignedPrestigePoints;
    setUnusedPrestigePoints(unusedPoints);
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
          {prestigeItems.map(
            ({
              prestigeItemIcon,
              prestigeItemTitle,
              prestigeItemDescription,
            }) => {
              <PrestigeMenuItem
                prestigeItemIcon={prestigeItemIcon}
                prestigeItemTitle={prestigeItemTitle}
                prestigeItemDescription={prestigeItemDescription}
              />;
            }
          )}
        </List>
      ) : null}
    </>
  );
};

export default PrestigeMenu;
