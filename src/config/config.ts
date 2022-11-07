/**
 * These are the thresholds for showing the next resource type
 */
export const enum TierLevels {
  One = 10,
  Two = One * 2,
  Three = Two * 2,
  Four = Three * 2,
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
