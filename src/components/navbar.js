import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./product/Button";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand bg-light  ">
        <ul className="d-flex">
          <li>
            <a className="mr-5" href="/">
              Home
            </a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fa fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </nav>
    </div>
  );
};
export default navbar;
