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
  const [isActivatingPrestige, setIsActivatingPrestige] =
    useState<boolean>(false);

  return (
    <PrestigeContext.Provider
      value={{
        prestigeLevel,
        setPrestigeLevel,
        isActivatingPrestige,
        setIsActivatingPrestige,
      }}
    >
      {children}
    </PrestigeContext.Provider>
  );
};

export default PrestigeProvider;
