import { makeAutoObservable } from "mobx";
import { DefaultPrestigeLevel, prestigeMenuItems } from "../config/prestige";

class PrestigeStore {
  prestigeLevel = DefaultPrestigeLevel;
  totalPrestigePoints = 0;
  assignedPrestigePoints = 0;
  isActivatingPrestige = false;
  prestigeStats = prestigeMenuItems;

  constructor() {
    makeAutoObservable(this);
  }
}

export default PrestigeStore;
