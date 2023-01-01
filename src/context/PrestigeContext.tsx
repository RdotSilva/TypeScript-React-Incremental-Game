import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import {
  DefaultPrestigeLevel,
  PrestigeItem,
  prestigeMenuItems,
} from "../config/prestige";

export type PrestigeContextType = {
  prestigeLevel: number;
  setPrestigeLevel: Dispatch<SetStateAction<number>>;
  totalPrestigePoints: number;
  setTotalPrestigePoints: Dispatch<SetStateAction<number>>;
  assignedPrestigePoints: number;
  setAssignedPrestigePoints: Dispatch<SetStateAction<number>>;
  isActivatingPrestige: boolean;
  setIsActivatingPrestige: Dispatch<SetStateAction<boolean>>;
  prestigeStats: PrestigeItem[];
  setPrestigeStats: Dispatch<SetStateAction<PrestigeItem[]>>;
};

type Props = {
  children: ReactNode;
};

export const PrestigeContext = createContext<PrestigeContextType>(
  {} as PrestigeContextType
);

const PrestigeProvider = ({ children }: Props) => {
  const [prestigeLevel, setPrestigeLevel] =
    useState<number>(DefaultPrestigeLevel);
  const [totalPrestigePoints, setTotalPrestigePoints] = useState<number>(0);
  const [assignedPrestigePoints, setAssignedPrestigePoints] =
    useState<number>(0);
  const [isActivatingPrestige, setIsActivatingPrestige] =
    useState<boolean>(false);
  const [prestigeStats, setPrestigeStats] =
    useState<PrestigeItem[]>(prestigeMenuItems);

  return (
    <PrestigeContext.Provider
      value={{
        prestigeLevel,
        setPrestigeLevel,
        totalPrestigePoints,
        setTotalPrestigePoints,
        assignedPrestigePoints,
        setAssignedPrestigePoints,
        isActivatingPrestige,
        setIsActivatingPrestige,
        prestigeStats,
        setPrestigeStats,
      }}
    >
      {children}
    </PrestigeContext.Provider>
  );
};

export default PrestigeProvider;
