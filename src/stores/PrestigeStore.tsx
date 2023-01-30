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

  setPrestigeLevel = (newValue: number) => {
    this.prestigeLevel = newValue;
  };

  setTotalPrestigePoints = (newValue: number) => {
    this.totalPrestigePoints = this.totalPrestigePoints + newValue;
  };

  setAssignedPrestigePoints = (newValue: number) => {
    this.assignedPrestigePoints = this.assignedPrestigePoints + newValue;
  };

  setIsActivatingPrestige = (newValue: boolean) => {
    this.isActivatingPrestige = newValue;
  };
}

export default PrestigeStore;
