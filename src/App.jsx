import { useState } from "react";
import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <main className="container">
      <div className="logo__div"></div>
      <Link className="play__link">
        <span className="play__btn"></span>
      </Link>
    </main>
  );
}

export default App;
