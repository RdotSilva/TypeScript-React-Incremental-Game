import React, { useContext } from "react";
import { StatContext } from "../context/StatContext";
import useStat from "./useStat";

/**
 * Main hook used for handling prestige logic
 */
const usePrestige = (): any => {
  const statContext = useContext(StatContext);
  const { resetStat, totalStats, setTotalStats, stat } = useStat();

  const { prestigeLevel, setPrestigeLevel } = statContext;

  const prestigeScore = 100;

  // TODO: Implement prestige logic
  const confirmPrestige = () => {
    console.log("confirming prestige");
    resetStat();
    setTotalStats(0);
    setPrestigeLevel(1);

    console.log(stat);
    // If total score is greater than or equal to the SCORE_TO_PRESTIGE

    // if (totalStats >= prestigeScore) {

    // }
    // Set prestige level ++
    // Set score back to zero
    // Set all resources back to ZERO
  };

  return {
    prestigeLevel,
    setPrestigeLevel,
    confirmPrestige,
  };
};

export default usePrestige;
