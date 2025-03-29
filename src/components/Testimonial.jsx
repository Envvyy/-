import profileImage from "../assets/images/team.jpg"; // Замените на путь к изображению

export default function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-image">
        <img src={profileImage} alt="Хаматуллин Ренат Талгатович" />
        <div className="author-info">
          <p className="author-name">Хаматуллин Ренат Талгатович</p>
          <p className="author-title">Основатель компании <span className="company-name">«Ди-мебель»</span></p>
          </div>  
      </div>

      <div className="testimonial-text">
        <p className="quote">«</p>

        <p className="main-text">
          За 13 лет производства мебели мы поняли главное: качественная и надежная кухня на заказ – это люди. 
          Не модные материалы, не супер станки, не профессиональный инструмент. А именно люди. Их опыт, ценности, 
          принципы и подход к работе.
        </p>

        <div className="highlighted-text">
          Только от них зависит, встанет ли кухня в проем, откроется ли фасад или упрется, например, в подоконник. 
          Одной ли ширины выставлены зазоры, по уровню ли установлена кухня, совпадут ли размеры шкафов.
        </div>

        <p className="main-text">
          Не отойдет ли кромка, закромлены ли будут все невидимые части ЛДСП, не разбухнет корпус ЛДСП в мойке и сушке. 
          Плавно и бесшумно будет работать фурнитура, или станет заедать, скрипеть и хлопать. Не обнаружатся ли повреждения 
          на фасадах, не закроют глаз монтажники на какие-то проблемы. Станет ли удобным и безопасным процесс приготовления.
        </p>

        <p className="quote quote-right">»</p>
        </div>
      </div>
  );
}
