import React from "react";
const Nav = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav>
      <div className="burger" onClick={() => setMenuOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h2>To-Do List</h2>
    </nav>
  );
};

export default Nav;
