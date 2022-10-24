interface Stat {
  stat: number;
}
export type StatContextType = {
  stat: number;
  setStat: React.Dispatch<React.SetStateAction<number>>;
};

import * as React from "react";

type Props = {
  children: React.ReactNode;
};

export const StatContext = React.createContext<StatContextType | null>(null);

const StatProvider = ({ children }: Props) => {
  const [stat, setStat] = React.useState(1);

  return (
    <StatContext.Provider value={{ stat, setStat }}>
      {children}
    </StatContext.Provider>
  );
};

export default StatProvider;
