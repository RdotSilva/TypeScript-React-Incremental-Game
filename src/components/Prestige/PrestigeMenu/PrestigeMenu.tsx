import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AccessAlarmRoundedIcon from "@mui/icons-material/AccessAlarmRounded";
import Battery0BarRoundedIcon from "@mui/icons-material/Battery0BarRounded";
import BeachAccessRoundedIcon from "@mui/icons-material/BeachAccessRounded";
import { Button } from "@mui/material";

type Props = {};

const PrestigeMenu = (props: Props) => {
  const [showPrestigeMenu, setShowPrestigeMenu] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setShowPrestigeMenu(!showPrestigeMenu)}>
        Prestige Menu
      </Button>
      {showPrestigeMenu ? (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccessAlarmRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Time Warp" secondary="Increase speed 2x" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Battery0BarRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Super Charge"
              secondary="Increase score by 2x"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Make it Rain"
              secondary="Increase change for power ups to appear"
            />
          </ListItem>
        </List>
      ) : null}
    </>
  );
};

export default PrestigeMenu;
