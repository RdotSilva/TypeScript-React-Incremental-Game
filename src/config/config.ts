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
}

export const enum PowerUpShowTimers {
  One = 10000,
  Two = 15000,
  Three = 20000,
}

export const enum PowerUpExpireTimers {
  One = 10000,
  Two = 20000,
  Three = 30000,
}

export const enum FlatRewardPowerUpBonus {
  One = 2,
  Two = One * 2,
  Three = Two * 2,
  Four = Three * 2,
}

export const enum ResourceIcons {
  ResourceOne = "Icon1",
  ResourceTwo = "Icon2",
  ResourceThree = "Icon3",
  ResourceFour = "Icon4",
  ResourceFive = "Icon5",
  ResourceSix = "Icon6",
}
