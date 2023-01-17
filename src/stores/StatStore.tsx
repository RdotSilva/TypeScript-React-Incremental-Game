import { makeAutoObservable } from "mobx";

const StatStore = () => {
  return makeAutoObservable({
    tier: 0,
  });
};

export default StatStore;
