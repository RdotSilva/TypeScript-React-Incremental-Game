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
}

export default StatStore;
