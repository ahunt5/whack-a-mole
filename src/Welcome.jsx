export default function Welcome() {
  return (
    <>
      <section className="welcome">
        <h1>Welcome to Whack a Mole</h1>
        <p>Click as many moles as you can within the alotted time!</p>
        <button className="play-button">Click Here To Play</button>
      </section>
      <section className="game">
        <PlayGame />
      </section>
    </>
  );
}
