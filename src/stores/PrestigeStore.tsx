import { makeAutoObservable } from "mobx";
import {
  DefaultPrestigeLevel,
  PrestigeItem,
  prestigeMenuItems,
} from "../config/prestige";

class PrestigeStore {
  prestigeLevel: number = DefaultPrestigeLevel;
  totalPrestigePoints: number = 0;
  assignedPrestigePoints: number = 0;
  isActivatingPrestige: boolean = false;
  prestigeStats: PrestigeItem[] = prestigeMenuItems;

  constructor() {
    makeAutoObservable(this);
  }

  setPrestigeLevel(newValue: number) {
    this.prestigeLevel = newValue;
  }

  setTotalPrestigePoints(newValue: number) {
    this.totalPrestigePoints = this.totalPrestigePoints + newValue;
  }
}

export default PrestigeStore;
