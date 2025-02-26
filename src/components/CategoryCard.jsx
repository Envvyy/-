import PropTypes from 'prop-types';

const CategoryCard = ({ title, image, text }) => {

    if (text === undefined)
    text = "Подробнее"

    return (
        <div className="category-card">
            <img src={image} alt={title}/>
            <div className="category-title">{title}</div>
            <button className="category-button">{text}</button>
        </div>
    )
}

CategoryCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default CategoryCard