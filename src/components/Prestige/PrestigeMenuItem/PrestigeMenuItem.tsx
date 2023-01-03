import React, { useState, useEffect } from "react";

import { COLORS } from "../../../config/colors";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LooksOneIcon from "@mui/icons-material/LooksOne";

import { useTheme } from "@mui/material/styles";

import { IconButton } from "@mui/material";
import usePrestige from "../../../hooks/usePrestige";
import { PrestigeItem } from "../../../config/prestige";

type Props = {
  isActive: boolean;
  pointsToActivate: number;
  id: string;
  icon: any;
  title: string;
  summary: string;
};

/**
 * Prestige menu item that is shown in the prestige menu. 
 * These are individual upgrades that a user can unlock if they have enough prestige points.
 */
const PrestigeMenuItem = ({
  isActive,
  pointsToActivate,
  id,
  icon,
  title,
  summary,
}: Props) => {
  const theme = useTheme();

  const [prestigeItemIsActive, setPrestigeItemIsActive] = useState(isActive);

  const {
    prestigeStats,
    setPrestigePowerUps,
    calculateUnusedPrestigePoints,
    setAssignedPrestigePoints,
  } = usePrestige();

  /**
   * Set a prestige upgrade item as active if the user has enough prestige points
   * @param id The ID of the prestige item to set active
   * @param pointsToActivatePrestige The number of points needed to activate a prestige item
   */
  const onClickPrestigeIcon = (
    currentPrestigeItemId: string,
    pointsToActivatePrestige: number
  ) => {
    const currentPrestigeItem = prestigeStats.find(
      ({ id }: PrestigeItem) => id === currentPrestigeItemId
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
   * Update prestige upgrade item active state 
   */
  useEffect(() => {
    setPrestigeItemIsActive(isActive);
  }, [isActive]);

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          sx={{
            backgroundColor: COLORS.darkTan,
          }}
        >
          <IconButton disabled>
            <LooksOneIcon />
          </IconButton>
        </Avatar>
      </ListItemAvatar>
      <ListItemAvatar>
        <Avatar
          sx={{
            backgroundColor: prestigeItemIsActive
              ? theme.palette.secondary.light
              : null,
          }}
        >
          <IconButton onClick={() => onClickPrestigeIcon(id, pointsToActivate)}>
            {icon}
          </IconButton>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{
          color: prestigeItemIsActive ? "secondary" : "black",
        }}
        primary={title}
        secondaryTypographyProps={{
          color: prestigeItemIsActive ? "secondary" : "black",
        }}
        secondary={summary}
      />
    </ListItem>
  );
};

export default PrestigeMenuItem;
