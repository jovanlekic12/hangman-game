import { Link, useParams } from "react-router";
import Letter from "../UI/Letter";
import KeyboardLetter from "../UI/KeyboardLetter";
import { useEffect, useState } from "react";

function InGame({ data }) {
  let params = useParams();
  const randomNumber = Math.floor(Math.random() * 31);
  const keyboardText = "abcdefghijklmnopqrstuvwxyz";
  const keyboard = keyboardText.split("");
  const [word, setWord] = useState([]);

  // console.log(data.categories[params.id]);

  useEffect(() => {
    const items = data.categories[params.id];
    const randomMovie = items[randomNumber].name;
    const randomMovieSplit = randomMovie.split("").map((char) => ({
      name: char,
      isGuessed: false,
    }));
    setWord(randomMovieSplit);
  }, []);

  function handleIsGuessed(letter) {
    const items = word.map((object) => {
      if (object.name.toLowerCase() === letter) {
        return { ...object, isGuessed: true };
      } else {
        console.log("wrong");
        return { ...object };
      }
    });
    setWord(items);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar__div">
          <Link className="back__link" to="/">
            <span className="side__btn"></span>
          </Link>
          <h2 className="category__title">{params.id}</h2>
        </div>
        <div className="navbar__div">
          <div className="progress__bar__out">
            <div className="progress__bar__in"></div>
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
    </>
  );
}

export default InGame;
