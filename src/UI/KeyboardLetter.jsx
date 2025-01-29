import { useState } from "react";

function KeyboardLetter({ char, onClick }) {
  const [disabled, setDisabled] = useState();

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
