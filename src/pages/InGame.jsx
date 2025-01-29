import { Link, useParams } from "react-router";
import Letter from "../UI/Letter";
import KeyboardLetter from "../UI/KeyboardLetter";
import { useEffect, useState } from "react";
import PauseOverlay from "../UI/PauseOverlay";
import OverOverlay from "../UI/OverOverlay";

function InGame({ data }) {
  let params = useParams();
  const randomNumber = Math.floor(Math.random() * 31);
  const keyboardText = "abcdefghijklmnopqrstuvwxyz";
  const keyboard = keyboardText.split("");
  const [word, setWord] = useState([]);
  const [health, setHealth] = useState(100);
  const [gameOver, setGameOver] = useState({ isOver: false, outcome: "" });
  const [isPaused, setIsPaused] = useState(false);

  function handleSetWord() {
    const items = data.categories[params.id];
    const randomMovie = items[randomNumber].name;
    const randomMovieSplit = randomMovie.split("").map((char) => ({
      name: char,
      isGuessed: false,
    }));
    randomMovieSplit.forEach((item) => {
      if (item.name === " ") {
        item.isGuessed = true;
        return;
      }
    });
    setWord(randomMovieSplit);
  }

  useEffect(() => {
    handleSetWord();
  }, []);

  useEffect(() => {
    if (word.length > 0) {
      if (health === 0) {
        setGameOver({ isOver: true, outcome: "Lost" });
      }
      if (word.every((letter) => letter.isGuessed === true)) {
        setGameOver({ isOver: true, outcome: "Win" });
      }
    }
  }, [health, word]);

  function handleIsGuessed(letter) {
    const includesLetter = word.includes(letter)
    const items = word.map((object) => {
      if (object.name.toLowerCase() === letter) {
        return { ...object, isGuessed: true };
      } else {
        return { ...object };
      }
    });
    if (!word.some((item) => item.name === letter)) setHealth(health - 12.5);
    setWord(items);
  }

  function handleRestart() {
    setHealth(100);
    setIsPaused(false);
    setGameOver({ isOver: false, outcome: "" });
    handleSetWord();
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar__div">
          <button className="back__link" onClick={() => setIsPaused(true)}>
            <span className="side__btn"></span>
          </button>
          <h2 className="category__title">{params.id}</h2>
        </div>
        <div className="navbar__div">
          <div className="progress__bar__out">
            <div
              className="progress__bar__in"
              style={{ width: `${health}%` }}
            ></div>
          </div>
          <span className="heart__icon"></span>
        </div>
      </nav>
      <main className="game__container">
        <section className="word__section">
          {word.map((char) => {
            return <Letter {...char} />;
          })}
        </section>
        <section className="keyboard">
          {keyboard.map((letter) => {
            return (
              <KeyboardLetter
                char={letter}
                onClick={() => handleIsGuessed(letter)}
              />
            );
          })}
        </section>
      </main>
      {isPaused && <PauseOverlay setIsPaused={setIsPaused}></PauseOverlay>}
      {gameOver.isOver && (
        <OverOverlay
          outcome={gameOver.outcome}
          handleRestart={handleRestart}
        ></OverOverlay>
      )}
    </>
  );
}

export default InGame;
