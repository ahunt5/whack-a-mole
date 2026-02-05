// upon clicking button, hides welcome UI
/*
displays game UI
  -current score
  -restart
  -set amount of holes (9) with a mole in only one of the holes
    // create ul and map array of holes
    // array.map()
    // one random hole will have a mole -> math.random
    // the hole with the mole will be assigned the class mole
    // 
*/
import "./index.css";
import "./game.css";
export default function PlayGame() {
  return (
    <section className="hidden">
      <span>
        <p className="score-restart">Score: 0</p>{" "}
        <button className="score-restart">Restart</button>
        <ul>
          <li className="hole"></li>
        </ul>
      </span>
    </section>
  );
}
