// upon clicking button, hides welcome UI
/*
displays game UI
  -current score
  -restart
  -set amount of holes (9) with a mole in only one of the holes
*/
import "../index.css";
import "./game.css";
export default function PlayGame() {
  return (
    <section className="game">
      <span>
        <p className="score-restart">Score: 0</p>{" "}
        <button className="score-restart">Restart</button>
      </span>
    </section>
  );
}
