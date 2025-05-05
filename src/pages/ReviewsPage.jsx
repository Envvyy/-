import './ReviewsPage.css'; // подключи если выносишь стили отдельно

const reviews = [
  {
    name: "Анна Петрова",
    rating: 5,
    comment: "Все сделано в срок, качество — на высоте! Обязательно обращусь снова.",
    photo: "/images/client1.jpg",
  },
  {
    name: "Игорь Михайлов",
    rating: 4,
    comment: "Мебель отличная, но доставка чуть задержалась. В остальном — супер.",
    photo: "/images/client2.jpg",
  },
  {
    name: "Наталья Орлова",
    rating: 5,
    comment: "Очень вежливые сотрудники, помогли с выбором. Всё понравилось!",
    photo: "/images/client3.jpg",
  },
];

const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <h1 className="reviews-title">Отзывы клиентов</h1>
      <div className="reviews-grid">
        {reviews.map((r, index) => (
          <div className="review-card" key={index}>
            <img src={r.photo} alt={r.name} className="review-photo" />
            <h3 className="review-name">{r.name}</h3>
            <div className="review-stars">
              {'★'.repeat(r.rating)}
              {'☆'.repeat(5 - r.rating)}
            </div>
            <p className="review-comment">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
