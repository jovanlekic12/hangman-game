import { Link } from "react-router";

function Categories(props) {
  const { categories } = props;

  console.log(categories);

  return (
    <>
      <nav className="navbar">
        <Link className="back__link" to="/">
          <span className="back__btn"></span>
        </Link>
        <h1>Pick a Category</h1>
      </nav>
      <section className="categories__grid">
        {categories &&
          Object.entries(categories).map(([category]) => {
            return (
              <Link className="grid__link" to={`/InGame/${category}`}>
                {category}
              </Link>
            );
          })}
      </section>
    </>
  );
}

export default Categories;
