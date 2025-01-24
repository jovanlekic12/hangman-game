import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="categories" element={<Categories />}></Route>
    </Routes>
  );
}

export default App;
