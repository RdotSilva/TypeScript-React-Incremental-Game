import AccessAlarmRoundedIcon from "@mui/icons-material/AccessAlarmRounded";
import Battery0BarRoundedIcon from "@mui/icons-material/Battery0BarRounded";
import BeachAccessRoundedIcon from "@mui/icons-material/BeachAccessRounded";

/**
 * The number of prestige points that will be given for a particular level threshold
 * If the user passes threshold of 100 (One) they will receive 1 prestige point
 */
export const enum PrestigePointsPreLevel {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}

export interface PrestigeItem {
  prestigeItemIcon: any;
  prestigeItemTitle: string;
  prestigeItemDescription: string;
}

/**
 * The prestige items you want to display in the prestige menu
 */
export const prestigeMenuItems: PrestigeItem[] = [
  {
    prestigeItemIcon: AccessAlarmRoundedIcon,
    prestigeItemTitle: "Time Warp",
    prestigeItemDescription: "Increase overall game speed by 2x",
  },
  {
    prestigeItemIcon: Battery0BarRoundedIcon,
    prestigeItemTitle: "Super Charge",
    prestigeItemDescription: "Increase points per tick for all stats by 2x",
  },
  {
    prestigeItemIcon: BeachAccessRoundedIcon,
    prestigeItemTitle: "Make It Rain",
    prestigeItemDescription: "Increase the chance for power ups to appear",
  },
];
