import React from "react";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? "open" : ""}`}>
      <img
        src={`${process.env.PUBLIC_URL}/images/Стрелочка.png`}
        alt="Стрелка"
        onClick={() => setMenuOpen(false)}
      />
      <a href="#">Главная</a>
      <a href="#" title="Как пользоваться?">
        Документация
      </a>
    </div>
  );
};

export default Menu;
