import { useGame } from "./GameContext";

export default function Welcome() {
  const { start } = useGame();
  return (
    <>
      <section className="welcome">
        <h1>Welcome to Whack a Mole</h1>
        <p>Click as many moles as you can within the alotted time!</p>
        <button className="play-button" onClick={start}>
          Click Here To Play
        </button>
      </section>
    </>
  );
}
