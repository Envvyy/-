import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <span>КАТАЛОГ</span>
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
      <Navigation />
    </header>
  )
}

export default Header
