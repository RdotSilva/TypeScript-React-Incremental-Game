import { makeAutoObservable } from "mobx";

class PowerUpStore {
  powerUpMultiplier: number = 1;
  powerUpTimer: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setPowerUpMultiplier = (newValue: number) => {
    this.powerUpMultiplier = newValue;
  };

  setPowerUpTimer = (newValue: number) => {
    this.powerUpTimer = newValue;
  };
}

export default PowerUpStore;
