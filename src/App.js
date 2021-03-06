import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Info from "./components/info";
import ProductList from "./components/product/productlist";
import { Switch, Route } from "react-router-dom";
import Productinfo from "./components/product/productinfo";
import About from "./components/about";
import Error from "./components/Error";
import Cart from "./components/Cart";
function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <Info />
              <ProductList />
            </React.Fragment>
          )}
        />
        <Route exact path="/details" component={Productinfo} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
