import React, { useState, useEffect } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { useTheme } from "@mui/material/styles";

import { IconButton } from "@mui/material";
import usePrestige from "../../../hooks/usePrestige";

type Props = {
  prestigeItemId: string;
  prestigeItemIcon: any;
  prestigeItemTitle: string;
  prestigeItemDescription: string;
};

/**
 * Create a prestige item that as a ListItem that can be used in the Prestige Menu
 */
const PrestigeMenuItem = ({
  prestigeItemId,
  prestigeItemIcon,
  prestigeItemTitle,
  prestigeItemDescription,
}: Props) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);

  const { prestigeStats, setPrestigeStats } = usePrestige();

  const onClickPrestigeIcon = (id: string) => {
    console.log(`Prestige Button Clicked for ID ${id}`);
    setIsActive(true);
    // TODO:  Activate whatever popup is being clicked (need to figure out a way to store prestige skills, maybe use context?)

    const currentPrestigeItem = prestigeStats.filter(
      ({ id }: any) => id === id
    );
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          sx={{
            backgroundColor: isActive ? theme.palette.secondary.light : null,
          }}
        >
          <IconButton onClick={() => onClickPrestigeIcon(prestigeItemId)}>
            {prestigeItemIcon}
          </IconButton>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{
          color: isActive ? "secondary" : "black",
        }}
        primary={prestigeItemTitle}
        secondaryTypographyProps={{
          color: isActive ? "secondary" : "black",
        }}
        secondary={prestigeItemDescription}
      />
    </ListItem>
  );
};

export default PrestigeMenuItem;
