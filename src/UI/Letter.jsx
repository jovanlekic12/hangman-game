import { useEffect, useState } from "react";

function Letter({ name, isGuessed }) {
  return (
    <article
      className={`${isGuessed ? "guessed__letter" : "letter__hidden"} ${
        name === " " ? "hidden" : ""
      }`}
    >
      <h1 className={isGuessed ? "" : "hidden"}>{name}</h1>
    </article>
  );
}

export default Letter;
