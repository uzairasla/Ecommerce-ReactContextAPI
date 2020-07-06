import React from "react";

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
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default navbar;
