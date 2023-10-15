import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [Menu, showMenu] = useState(false);

  const toggleMenu = () => {
    showMenu(!Menu);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <a
          style={{
            color: "#ffa366",
            fontWeight: "500",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Swarajya
        </a>{" "}
        News
      </div>
      <div className={Menu ? "show" : "nav-links"}>
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/Entertainment">
          <a>Entertainment</a>
        </Link>
        <Link to="/Sports">
          <a>Sports</a>
        </Link>

        <a href="/contact">Videos</a>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <i className={Menu ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
    </nav>
  );
}

export default Header;
