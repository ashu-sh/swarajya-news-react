import React, { useState } from "react";

function Header() {
  const [Menu, showMenu] = useState(false);

  const toggleMenu = () => {
    showMenu(!Menu);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">Logo</div>
      <div className={Menu ? "show" : "nav-links"}>
        <a href="/">Home</a>

        <a href="/about">Entertainment</a>

        <a href="/services">Sports</a>

        <a href="/contact">Videos</a>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <i className={Menu ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
    </nav>
  );
}

export default Header;
