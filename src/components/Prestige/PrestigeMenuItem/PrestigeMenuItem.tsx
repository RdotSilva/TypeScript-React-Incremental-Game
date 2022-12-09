import React, { useState, useEffect } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { IconButton } from "@mui/material";

type Props = {
  prestigeItemIcon: any;
  prestigeItemTitle: string;
  prestigeItemDescription: string;
};

/**
 * Create a prestige item that as a ListItem that can be used in the Prestige Menu
 */
const PrestigeMenuItem = ({
  prestigeItemIcon,
  prestigeItemTitle,
  prestigeItemDescription,
}: Props) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <IconButton>{prestigeItemIcon}</IconButton>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={prestigeItemTitle}
        secondary={prestigeItemDescription}
      />
    </ListItem>
  );
};

export default PrestigeMenuItem;
