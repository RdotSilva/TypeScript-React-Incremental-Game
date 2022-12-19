import React, { useState, useEffect } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { useTheme } from "@mui/material/styles";

import { IconButton } from "@mui/material";
import usePrestige from "../../../hooks/usePrestige";
import { PrestigeItem } from "../../../config/prestige";

type Props = {
  isActive: boolean;
  pointsToActivate: number;
  prestigeItemId: string;
  prestigeItemIcon: any;
  prestigeItemTitle: string;
  prestigeItemDescription: string;
};

/**
 * Create a prestige item that as a ListItem that can be used in the Prestige Menu
 */
const PrestigeMenuItem = ({
  isActive,
  pointsToActivate,
  prestigeItemId,
  prestigeItemIcon,
  prestigeItemTitle,
  prestigeItemDescription,
}: Props) => {
  const theme = useTheme();

  const [prestigeItemIsActive, setPrestigeItemIsActive] = useState(isActive);

  const {
    prestigeStats,
    setPrestigeStats,
    setPrestigePowerUps,
    totalPrestigePoints,
    calculateUnusedPrestigePoints,
    setAssignedPrestigePoints,
  } = usePrestige();

  /**
   * Set a prestige item as active
   * @param id The ID of the prestige item to set active
   * @param pointsToActivatePrestige The number of points needed to activate a prestige item
   */
  const onClickPrestigeIcon = (
    id: string,
    pointsToActivatePrestige: number
  ) => {
    const currentPrestigeItem = prestigeStats.find(
      ({ prestigeItemId }: PrestigeItem) => prestigeItemId === id
    );

    const unusedPrestigePoints = calculateUnusedPrestigePoints();

    if (unusedPrestigePoints >= pointsToActivatePrestige) {
      setAssignedPrestigePoints(pointsToActivatePrestige);
      currentPrestigeItem.isActive = true;
      setPrestigeItemIsActive(true);
      setPrestigePowerUps();
    }
  };

  /**
   * Update prestige item active state
   */
  useEffect(() => {
    setPrestigeItemIsActive(isActive);
  }, [isActive]);

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          sx={{
            backgroundColor: prestigeItemIsActive
              ? theme.palette.secondary.light
              : null,
          }}
        >
          <IconButton
            onClick={() =>
              onClickPrestigeIcon(prestigeItemId, pointsToActivate)
            }
          >
            {prestigeItemIcon}
          </IconButton>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{
          color: prestigeItemIsActive ? "secondary" : "black",
        }}
        primary={prestigeItemTitle}
        secondaryTypographyProps={{
          color: prestigeItemIsActive ? "secondary" : "black",
        }}
        secondary={prestigeItemDescription}
      />
    </ListItem>
  );
};

export default PrestigeMenuItem;
