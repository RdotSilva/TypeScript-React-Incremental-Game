import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
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

  return (
    <StatContext.Provider
      value={{
        tier,
        setTier,
        totalStats,
        setTotalStats,
        powerUpMultiplier,
        setPowerUpMultiplier,
      }}
    >
      {children}
    </StatContext.Provider>
  );
};

export default StatProvider;
