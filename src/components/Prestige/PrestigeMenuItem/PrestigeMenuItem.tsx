import React, { useState, useEffect } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { useTheme } from "@mui/material/styles";

import { IconButton } from "@mui/material";
import usePrestige from "../../../hooks/usePrestige";

type Props = {
  isActive: boolean;
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
  prestigeItemId,
  prestigeItemIcon,
  prestigeItemTitle,
  prestigeItemDescription,
}: Props) => {
  const theme = useTheme();

  const [prestigeItemIsActive, setPrestigeItemIsActive] = useState(isActive);

  const { prestigeStats, setPrestigeStats, setPrestigePowerUps } =
    usePrestige();

  /**
   * Set a prestige item as active
   * @param id The ID of the prestige item to set active
   */
  const onClickPrestigeIcon = (id: string) => {
    const currentPrestigeItem = prestigeStats.find(
      (item: any) => item.prestigeItemId === id
    );

    currentPrestigeItem.isActive = true;
    setPrestigeItemIsActive(true);
    setPrestigePowerUps();
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
          <IconButton onClick={() => onClickPrestigeIcon(prestigeItemId)}>
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
