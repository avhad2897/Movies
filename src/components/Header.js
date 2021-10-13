import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="logo">
            MOVIE_REVIEWS
          </div>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search Movies" />
        </div>
        <div className="city">
          <select name="State">
            <option value="pu">Pune</option>
            <option value="mu">Mumbai</option>
            <option value="kh">Kholapur</option>
          </select>
        </div>
        <button className="login"> Search </button>
        <div className="clear"></div>
      </div>
    </header>
  );
};

export default Header;
