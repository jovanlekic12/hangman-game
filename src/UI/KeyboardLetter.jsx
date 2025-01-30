import { useEffect, useState } from "react";

function KeyboardLetter({ gameOver, char, onClick }) {
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    setDisabled(false);
  }, [gameOver]);

  return (
    <button
      className={disabled ? "letter disabled" : "letter"}
      onClick={() => {
        onClick(), setDisabled(true);
      }}
      disabled={disabled}
    >
      <h1>{char}</h1>
    </button>
  );
}

export default KeyboardLetter;
