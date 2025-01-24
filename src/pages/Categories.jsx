import { Link } from "react-router";

function Categories() {
  return (
    <>
      <nav className="navbar__categories">
        <Link className="back__link">
          <span className="back__btn"></span>
        </Link>
        <h1>Pick a Category</h1>
      </nav>
      <section className="categories__grid"></section>
    </>
  );
}

export default Categories;
