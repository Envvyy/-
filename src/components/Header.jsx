import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="header">
      <div className="header__top">
        <div
          className="header__logo-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="header__logo">КАТАЛОГ</div>

          <div className={`dropdown-menu ${isHovered ? "visible" : ""}`}>
            <NavLink to="/catalog">Каталог</NavLink>
            <NavLink to="/reviews">Отзывы</NavLink>
            <NavLink to="/promo">Акции</NavLink>
            <NavLink to="/vacancy">Вакансии</NavLink>
            <NavLink to="/articles">Статьи</NavLink>
            <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer">Соцсети</a>
          </div>
        </div>

        <div className="header__contacts">
          <a href="tel:+79053510603">+7 (905) 351-06-03</a>
          <div className="header__worktime">
            пн-пт: 9:00 - 17:00<br />
            сб: 10:00 - 14:00<br />
            вс: выходной
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <NavLink to="/catalog">Каталог мебели</NavLink>
        <NavLink to="/promo">Акции</NavLink>
        <NavLink to="/reviews">Отзывы</NavLink>
      </nav>
    </header>
  );
};

export default Header;
