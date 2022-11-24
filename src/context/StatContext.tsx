import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { PowerUpExpireTimers } from "../config/config";
interface Stat {
  stat: number;
}
export type StatContextType = {
  tier: number;
  setTier: Dispatch<SetStateAction<number>>;
  totalStats: number;
  setTotalStats: Dispatch<SetStateAction<number>>;
  powerUpMultiplier: number;
  setPowerUpMultiplier: Dispatch<SetStateAction<number>>;
  powerUpTimer: number;
  setPowerUpTimer: Dispatch<SetStateAction<number>>;
};

type Props = {
  children: ReactNode;
};

export const StatContext = createContext<StatContextType>(
  {} as StatContextType
);

const StatProvider = ({ children }: Props) => {
  const [tier, setTier] = useState<number>(0);
  const [totalStats, setTotalStats] = useState<number>(0);
  const [powerUpMultiplier, setPowerUpMultiplier] = useState<number>(1);
  const [powerUpTimer, setPowerUpTimer] = useState<number>(0);

  return (
    <StatContext.Provider
      value={{
        tier,
        setTier,
        totalStats,
        setTotalStats,
        powerUpMultiplier,
        setPowerUpMultiplier,
        powerUpTimer,
        setPowerUpTimer,
      }}
    >
      {children}
    </StatContext.Provider>
  );
};

export default StatProvider;
