import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import InGame from "./pages/InGame";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route
        path="categories"
        element={<Categories categories={data.categories} />}
      ></Route>
      <Route path="InGame/:id" element={<InGame data={data} />}></Route>
    </Routes>
  );
}

export default App;
