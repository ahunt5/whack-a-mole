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
  // when restart clicked, set IsPlaying to false
  const stop = () => {
    setIsPlaying(false);
  };
  // when mole is clicked, add 1 to the score and make a new board
  const whack = () => {
    setBoard(makeBoard(board));
    setScore(score + 1);
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
    whack,
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
  // creates an array that has the current index of the mole ie its location
  const newMoleBoard = board.reduce((newMoleBoard, holeHasMole, index) => {
    if (!holeHasMole) newMoleBoard.push(index);
    return newMoleBoard;
  }, []);
  const moleLocation =
    newMoleBoard[Math.floor(Math.random() * newMoleBoard.length)];
  const newBoard = Array(NUM_HOLES).fill(false);
  // set mole location in the new board to random generated position
  newBoard[moleLocation] = true;

  return newBoard;
}
