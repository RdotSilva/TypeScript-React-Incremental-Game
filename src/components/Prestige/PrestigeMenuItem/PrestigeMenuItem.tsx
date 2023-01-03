import React, { useState, useEffect } from "react";

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
 * Create a prestige item that as a ListItem that can be used in the Prestige Menu
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
   * Set a prestige item as active
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
   * Update prestige item active state
   */
  useEffect(() => {
    setPrestigeItemIsActive(isActive);
  }, [isActive]);

  return (
    <ListItem
      secondaryAction={
        <IconButton disabled>
          <LooksOneIcon />
        </IconButton>
      }
    >
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
