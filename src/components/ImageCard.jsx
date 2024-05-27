import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ImageCard = ({ photo }) => {
  return (
    <div className="image-card">
      <Link to={`/photos/${photo.id}`}>
        <img src={photo.urls.small} alt={photo.alt_description} />
      </Link>
    </div>
  );
};

ImageCard.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
};

export default ImageCard;
