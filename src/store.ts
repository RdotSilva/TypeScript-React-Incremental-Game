import { createContext, useContext } from "react";
import StatStore from "./stores/StatStore";

const store = {
  statStore: StatStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
