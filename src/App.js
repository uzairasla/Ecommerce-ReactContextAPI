import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Info from "./components/info";
function App() {
  return (
    <div>
      <Navbar />
      <Info />
    </div>
  );
}

export default App;
