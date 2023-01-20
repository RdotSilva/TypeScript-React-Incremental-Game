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
}

export default PrestigeStore;
