import { createContext, useContext } from "react";
import PrestigeStore from "./stores/PrestigeStore";
import StatStore from "./stores/StatStore";

const store = {
  statStore: new StatStore(),
  prestigeStore: new PrestigeStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;