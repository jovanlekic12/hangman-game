import { Link } from "react-router";
import ReactDOM from "react-dom";

function PauseOverlay({ setIsPaused }) {
  return ReactDOM.createPortal(
    <main className="overlay">
      <section className="modal">
        <h1 className="modal__title">Paused</h1>
        <div className="modal__btns">
          <button className="modal__btn" onClick={() => setIsPaused(false)}>
            Continue
          </button>
          <Link className="modal__btn" to="/categories">
            New category
          </Link>
          <Link className="modal__btn quit__btn" to="/">
            Quit game
          </Link>
        </div>
      </section>
    </main>,
    document.body
  );
}

export default PauseOverlay;
