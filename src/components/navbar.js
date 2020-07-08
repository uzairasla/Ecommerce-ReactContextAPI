import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand bg-light  ">
        <ul className="d-flex">
          <li>
            <a className="mr-5" href="#">
              Products
            </a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default navbar;
