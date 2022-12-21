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
  pointsToActivate: number;
  prestigeItemId: string;
  prestigeItemIcon: any;
  prestigeItemTitle: string;
  prestigeItemDescription: string;
}

export const enum PrestigeMenuItemIds {
  One = "001",
  Two = "002",
  Three = "003",
}

/**
 * This is the minimum prestige level needed to show the user the Prestige Menu (should appear after first prestige)
 */
export const PrestigeLevelToShowMenu = 1;

/**
 * The prestige items you want to display in the prestige menu
 */
export const prestigeMenuItems: PrestigeItem[] = [
  {
    isActive: false,
    pointsToActivate: 1,
    prestigeItemId: PrestigeMenuItemIds.One,
    prestigeItemIcon: AccessAlarmRoundedIcon,
    prestigeItemTitle: "Time Warp",
    prestigeItemDescription: "Increase overall game speed by 2x",
  },
  {
    isActive: false,
    pointsToActivate: 1,
    prestigeItemId: PrestigeMenuItemIds.Two,
    prestigeItemIcon: Battery0BarRoundedIcon,
    prestigeItemTitle: "Super Charge",
    prestigeItemDescription: "Increase points per tick for all stats by 2x",
  },
  {
    isActive: false,
    pointsToActivate: 1,
    prestigeItemId: PrestigeMenuItemIds.Three,
    prestigeItemIcon: BeachAccessRoundedIcon,
    prestigeItemTitle: "Make It Rain",
    prestigeItemDescription: "Increase the chance for power ups to appear",
  },
];
