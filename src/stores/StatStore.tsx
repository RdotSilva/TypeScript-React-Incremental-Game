import { makeAutoObservable } from "mobx";

class StatStore {
  tier = 0;
  totalStats = 0;
  powerUpMultiplier = 1;
  powerUpTimer = 0;
  prestigeMultiplier = 0;

  constructor() {
    makeAutoObservable(this);
  }
}

export default StatStore;
