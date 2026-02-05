import { useContext, useState, createContext } from "react";
// constants
const NUM_HOLES = 9;
/*
state -> holes, holeWithMole, score
*/

// Create context
const GameContext = createContext();

// Create Provider
export function GameProvider({ children }) {
  // make 9 holes for game
  const [board, setBoard] = useState(makeBoard());
  // set initial score to 0
  const [score, setScore] = useState(0);
  // set whether or not the user is playing the game (start at false)
  const [isPlaying, setIsPlaying] = useState(false);
  /**
   * when starting, create the board
   * set score to 0
   * set isPlaying to true
   */
  const start = () => {
    setBoard(makeBoard());
    setScore(0);
    setIsPlaying(true);
  };
  /**
   *
   */
  const stop = () => {
    setIsPlaying(false);
  };
  /**
   * values to be passed down
   */
  const value = {
    board,
    score,
    isPlaying,
    start,
    stop,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
// Create hook
export function useGame() {
  // Try to get a value from GameContext
  const context = useContext(GameContext);
  // No value = not in descendant
  if (!context) throw Error("useGame must be used within a GameProvider");
  return context;
}

function makeBoard(board = Array(NUM_HOLES).fill(false)) {
  /** choose a random spot to create a mole
   * react doesn't redisplay changed state, so create a new state and display that instead
   */
  const moleLocation = Math.floor(Math.random() * NUM_HOLES);
  const newBoard = Array(NUM_HOLES).fill(false);
  newBoard[moleLocation] = true;
  return newBoard;
}
