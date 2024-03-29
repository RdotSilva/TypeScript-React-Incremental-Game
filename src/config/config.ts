/**
 * These are the thresholds for showing the next resource type
 */
export const enum TierLevels {
  One = 10,
  Two = One * 2,
  Three = Two * 2,
  Four = Three * 2,
  Five = Four * 2,
}

/**
 * These are the thresholds for showing the next upgrade
 * They are set low for testing
 * TODO: Add higher values for live
 */
export const enum UpgradeLevels {
  One = 10,
  Two = One * 10,
  Three = Two + 10,
  Four = Three + 10,
}

export const enum PowerUpShowTimers {
  One = 10000,
  Two = 15000,
  Three = 20000,
}

/**
 * Values used when a user has activated prestige number 3 (decrease time for powerups)
 */
export const enum PowerUpShowTimersWithPrestige {
  One = 5000,
  Two = 7500,
  Three = 10000,
}

export const enum PowerUpExpireTimers {
  One = 10000,
  Two = 20000,
  Three = 30000,
}

export const MultiplyXpPowerUpReward = {
  One: 2,
  Two: 4,
  Three: 8,
  Four: 16,
};

export const enum ResourceIcons {
  ResourceOne = "Icon1",
  ResourceTwo = "Icon2",
  ResourceThree = "Icon3",
  ResourceFour = "Icon4",
  ResourceFive = "Icon5",
  ResourceSix = "Icon6",
}
