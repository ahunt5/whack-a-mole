// upon clicking button, hides welcome UI
/**
displays game UI
  -current score
  -restart
  -set amount of holes (9) with a mole in only one of the holes
     create ul and map array of holes
     board.map with bool (if true, make it return li with class of mole) and an id to use as the key
     one random hole will have a mole -> math.random
     the hole with the mole will be assigned the class mole
*/
import "./index.css";
import "./game.css";
import { useGame } from "./GameContext";
export default function PlayGame() {
  const { board } = useGame();
  const { stop } = useGame();
  return (
    <section className="game-board">
      <span>
        <p className="score-restart">Score: 0</p>{" "}
        <button className="score-restart" onClick={stop}>
          Restart
        </button>
        <ul className="board">
          {board.map((holeHasMole, id) => (
            <MakeHole key={id} holeHasMole={holeHasMole} />
          ))}
        </ul>
      </span>
    </section>
  );
}

function MakeHole({ holeHasMole }) {
  // if the hole has a mole, give it the class mole and make it clickable
  if (holeHasMole === true) return <li className="hole mole">a mole</li>;
  // if not, set class to hole
  return <li className="hole">test</li>;
}
