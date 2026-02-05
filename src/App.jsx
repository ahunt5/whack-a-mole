import Welcome from "./Welcome";
import { useGame } from "./GameContext";
import PlayGame from "./PlayGame";
export default function App() {
  const { isPlaying } = useGame();
  /** if (isPlaying) {
   * return <PlayGame></PlayGame>;
   * } else return <Welcome></Welcome>;
   */
  return isPlaying ? <PlayGame /> : <Welcome />;
}
