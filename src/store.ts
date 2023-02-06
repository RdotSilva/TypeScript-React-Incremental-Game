import { createContext, useContext } from "react";
import PowerUpStore from "./stores/PowerUpStore";
import PrestigeStore from "./stores/PrestigeStore";
import StatStore from "./stores/StatStore";

const store = {
  statStore: new StatStore(),
  prestigeStore: new PrestigeStore(),
  powerUpStore: new PowerUpStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
