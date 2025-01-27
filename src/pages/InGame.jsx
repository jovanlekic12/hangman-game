import { Link, useParams } from "react-router";
import Letter from "../UI/Letter";
import KeyboardLetter from "../UI/KeyboardLetter";
import { useState } from "react";

function InGame({ data }) {
  let params = useParams();

  console.log(data.categories[params.id]);

  const text = "abcdefghijklmnopqrstuvwxyz";
  const keyboard = text.split("");

  const k = "ki ki";
  const v = k.split("");
  const da = v.map((char) => ({
    name: char,
    isGuessed: false,
  }));

  const [mjau, setMjau] = useState(da);

  function handleIsGuessed(letter) {
    const nw = mjau.map((object) => {
      if (object.name === letter) {
        return { ...object, isGuessed: true };
      } else {
        console.log("wrong");
        return { ...object };
      }
    });
    setMjau(nw);
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
          {mjau.map((char) => {
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
