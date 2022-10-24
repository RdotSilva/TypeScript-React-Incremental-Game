import { createContext } from "react";

export interface GameContextInterface {
  stat: number;
}

const GameContext = createContext<GameContextInterface | null>(null);

export default GameContext;
