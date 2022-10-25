import * as React from "react";
interface Stat {
  stat: number;
}
export type StatContextType = {
  stat: number;
  setStat: React.Dispatch<React.SetStateAction<number>>;
  tier: number;
  setTier: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  children: React.ReactNode;
};

export const StatContext = React.createContext<StatContextType | null>(null);

const StatProvider = ({ children }: Props) => {
  const [stat, setStat] = React.useState(1);
  const [tier, setTier] = React.useState(0);

  return (
    <StatContext.Provider value={{ stat, setStat, tier, setTier }}>
      {children}
    </StatContext.Provider>
  );
};

export default StatProvider;
