import { useEffect, useState } from "react";

function Letter({ name, isGuessed }) {
  console.log("g", isGuessed);

  return (
    <article
      className={`${isGuessed ? "letter" : "letter__hidden"} ${
        name === " " ? "hidden" : ""
      }`}
    >
      <h1 className="hidden">{name}</h1>
    </article>
  );
}

export default Letter;
