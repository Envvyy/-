import teamImage from "../assets/images/team.jpg";

const Production = () => {
    return (
        <div className="production-container">
            <div className="production-text">
                <h1>СОБСТВЕННОЕ ПРОИЗВОДСТВО</h1>
                <p>
                    (С 2011 года, наша компания осуществляет производство мебели под заказ.
                    Работаем с очень разными объектами и тд. Вообще, мы ребята классные)
                </p>
            </div>
            <div className="production-image">
                <img src={teamImage} alt="Команда ДИ" />
                <p className="team-label">Команда «ДИ»</p>
            </div>
        </div>
    );
};

export default Production;
