import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type PrestigeContextType = {
  prestigeLevel: number;
  setPrestigeLevel: Dispatch<SetStateAction<number>>;
  totalPrestigePoints: number;
  setTotalPrestigePoints: Dispatch<SetStateAction<number>>;
  assignedPrestigePoints: number;
  setAssignedPrestigePoints: Dispatch<SetStateAction<number>>;
  isActivatingPrestige: boolean;
  setIsActivatingPrestige: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  children: ReactNode;
};

export const PrestigeContext = createContext<PrestigeContextType>(
  {} as PrestigeContextType
);

const PrestigeProvider = ({ children }: Props) => {
  const [prestigeLevel, setPrestigeLevel] = useState<number>(0);
  const [totalPrestigePoints, setTotalPrestigePoints] = useState<number>(0);
  const [assignedPrestigePoints, setAssignedPrestigePoints] =
    useState<number>(0);
  const [isActivatingPrestige, setIsActivatingPrestige] =
    useState<boolean>(false);

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
      }}
    >
      {children}
    </PrestigeContext.Provider>
  );
};

export default PrestigeProvider;
