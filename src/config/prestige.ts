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

/**
 * This is the score that is used to show the prestige option
 * If score reaches this point we will show the user the prestige button where they can activate prestige
 */
export const enum ScoreToShowPrestige {
  One = 100,
  Two = One * 2,
  Three = Two * 2,
  Four = Three * 2,
}

/**
 * Describes a menu item that can be activated inside of the prestige menu
 */

export interface PrestigeItem {
  isActive: boolean;
  pointsToActivate: number;
  id: string;
  icon: any;
  title: string;
  summary: string;
}

/**
 * List of IDs for all of the prestige menu items
 */
export const enum PrestigeMenuItemIds {
  One = "001",
  Two = "002",
  Three = "003",
}

/**
 * This is the minimum prestige level needed to show the user the Prestige Menu (should appear after first prestige)
 */
export const PrestigeLevelToShowMenu = 0;

/**
 * This it the default prestige level that a new user will start with
 */
export const DefaultPrestigeLevel = 0;

/**
 * The prestige items you want to display in the prestige menu
 */
export const prestigeMenuItems: PrestigeItem[] = [
  {
    isActive: false,
    pointsToActivate: 1,
    id: PrestigeMenuItemIds.One,
    icon: AccessAlarmRoundedIcon,
    title: "Time Warp",
    summary: "Increase overall game speed by 2x",
  },
  {
    isActive: false,
    pointsToActivate: 1,
    id: PrestigeMenuItemIds.Two,
    icon: Battery0BarRoundedIcon,
    title: "Super Charge",
    summary: "Increase points per tick for all stats by 2x",
  },
  {
    isActive: false,
    pointsToActivate: 1,
    id: PrestigeMenuItemIds.Three,
    icon: BeachAccessRoundedIcon,
    title: "Make It Rain",
    summary: "Increase the chance for power ups to appear",
  },
];
