import PropTypes from "prop-types";

const IconCard = ({ title, text, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{text}</p>
    </div>
  );
};

IconCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default IconCard;