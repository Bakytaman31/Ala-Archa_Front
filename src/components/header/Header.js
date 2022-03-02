import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const componentName = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="navbar__logo">
              <Link to="/"></Link>
            </div>
            <ul className="navbar__right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="header__search-input">
                <input type="text" placeholder="search..." />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default componentName;
