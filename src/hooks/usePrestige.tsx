import React, { useContext } from "react";
import { StatContext } from "../context/StatContext";

/**
 * Main hook used for handling prestige logic
 */
const usePrestige = (): any => {
  const statContext = useContext(StatContext);
  const { prestigeLevel, setPrestigeLevel } = statContext;

  return {
    prestigeLevel,
    setPrestigeLevel,
  };
};

export default usePrestige;
