import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Info from "./components/info";
import ProductList from "./components/product/productlist";
function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <ProductList />
    </div>
  );
}

export default App;
