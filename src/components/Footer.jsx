function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#home">ГЛАВНАЯ</a>
        <a href="#vacancy">ВАКАНСИИ</a>
        <a href="#promo">АКЦИИ</a>
        <a href="#team">КОМАНДА</a>
        <a href="#reviews">ОТЗЫВЫ</a>
      </nav>
      
      <div className="footer-center">
        <div className="footer-logo">
          Д<span className="footer-separator">|</span>И
        </div>
        <div className="footer-email">di-mebelufa@mail.ru</div>
      </div>

      <div className="footer-bottom">
        <p>*Все права защищены</p>
      </div>
    </footer>
  );
}

export default Footer;

