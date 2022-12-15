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

export const enum ScoreToShowPrestige {
  One = 100,
  Two = One * 2,
  Three = Two * 2,
}

export interface PrestigeItem {
  isActive: boolean;
  prestigeItemId: string;
  prestigeItemIcon: any;
  prestigeItemTitle: string;
  prestigeItemDescription: string;
}

/**
 * The prestige items you want to display in the prestige menu
 */
export const prestigeMenuItems: PrestigeItem[] = [
  {
    isActive: false,
    prestigeItemId: "001",
    prestigeItemIcon: AccessAlarmRoundedIcon,
    prestigeItemTitle: "Time Warp",
    prestigeItemDescription: "Increase overall game speed by 2x",
  },
  {
    isActive: false,
    prestigeItemId: "002",
    prestigeItemIcon: Battery0BarRoundedIcon,
    prestigeItemTitle: "Super Charge",
    prestigeItemDescription: "Increase points per tick for all stats by 2x",
  },
  {
    isActive: false,
    prestigeItemId: "003",
    prestigeItemIcon: BeachAccessRoundedIcon,
    prestigeItemTitle: "Make It Rain",
    prestigeItemDescription: "Increase the chance for power ups to appear",
  },
];
