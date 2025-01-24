import { Link } from "react-router";

function Home() {
  return (
    <main className="container">
      <div className="logo__div"></div>
      <Link className="play__link" to="categories">
        <span className="play__btn"></span>
      </Link>
    </main>
  );
}

export default Home;
