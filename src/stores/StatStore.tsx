import { makeAutoObservable } from "mobx";

class StatStore {
  tier: number = 0;
  totalStats: number = 0;
  powerUpMultiplier: number = 1;
  powerUpTimer: number = 0;
  prestigeMultiplier: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setTier = (newValue: number) => {
    this.tier = newValue;
  };

  setTotalStats = (newValue: number) => {
    this.totalStats = this.totalStats + newValue;
  };

  setPowerUpMultiplier = (newValue: number) => {
    this.powerUpMultiplier = newValue;
  };

  setPowerUpTimer = (newValue: number) => {
    this.powerUpTimer = newValue;
  };

  setPrestigeMultiplier = (newValue: number) => {
    this.prestigeMultiplier = newValue;
  };

  setTotalStatsWithMultiplier = (multiplier: number) => {
    this.totalStats = this.totalStats * multiplier;
  };
}

export default StatStore;
