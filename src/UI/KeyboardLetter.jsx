function KeyboardLetter({ char, onClick }) {
  return (
    <article className="letter" onClick={onClick}>
      <h1>{char}</h1>
    </article>
  );
}

export default KeyboardLetter;
