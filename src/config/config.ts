/**
 * These are the thresholds for showing the next resource type
 */
export const enum TierLevels {
  One = 10,
  Two = One * 2,
  Three = Two * 2,
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
