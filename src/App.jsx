import Welcome from "./Welcome";
import { useGame } from "./GameContext";
export default function App() {
  const { isPlaying } = useGame();
  return (
    <>
      <Welcome />
    </>
  );
}
