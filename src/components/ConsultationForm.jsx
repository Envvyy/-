import { useState } from 'react';

function ConsultationForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Имя: ${name}\nТелефон: ${phone}`);
  };

  return (
    <div className="consultation-section">
      <div className="consultation-wrapper fade-in-animation">
        <div className="consultation-form-wrapper">
          <h2 className="consultation-title">ОСТАВЬТЕ ЗАЯВКУ НА КОНСУЛЬТАЦИЮ</h2>
          <p className="consultation-subtitle">
            Мы свяжемся с вами в течение часа, обсудим будущий проект 
            с&nbsp;замерщиком и дизайнером.
          </p>
          <p className="consultation-free">
            <em>*Консультация, замер и проект — бесплатно!</em>
          </p>

          <form onSubmit={handleSubmit} className="consultation-form">
            <label>
              <span>ИМЯ</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                required
              />
            </label>

            <label>
              <span>ТЕЛЕФОН</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                required
              />
            </label>

            <button type="submit" className="consultation-submit">
              ОТПРАВИТЬ
            </button>

            <p className="consultation-policy">
              Нажимая кнопку «Отправить» вы соглашаетесь 
              с&nbsp;
              <a href="#policy">политикой обработки персональных данных</a>
            </p>
          </form>
        </div>

        <div className="consultation-reviews">
          <h3>ОТЗЫВЫ</h3>
          <div className="reviews-list">
            <div className="review-item">
              <p><strong>Карина</strong> 1 января 2023</p>
              <p>
                Эти люди просто золото: делают так хорошо, 
                сделали всё быстро и нет никаких вопросов. 
                Спасибо!
              </p>
            </div>
            <div className="review-item">
              <p><strong>Игорь Миронов</strong> 10 февраля 2023</p>
              <p>
                Заказал ремонт в ванной, всё сделали аккуратно 
                и в срок. Очень доволен качеством!
              </p>
            </div>
            <div className="review-item">
              <p><strong>Гульнара Файзуллина</strong> 12 марта 2023</p>
              <p>
                Хорошая организация, заказывали кухню, 
                остались довольны, буду рекомендовать!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultationForm;
