import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ImageCard = ({ photo, onAddToCollection, onRemoveFromCollection }) => {
  const [saved, setSaved] = useState(false);

  const handleAddToCollection = () => {
    onAddToCollection(photo);
    setSaved(true);
  };

  const handleRemoveFromCollection = () => {
    onRemoveFromCollection(photo.id);
    setSaved(false);
  };

  return (
    <div className="image-card">
      <Link to={`/photos/${photo.id}`}>
        <img src={photo.urls.small} alt={photo.alt_description} />
      </Link>
      {saved ? (
        <button onClick={handleRemoveFromCollection}>Remove from Collection</button>
      ) : (
        <button onClick={handleAddToCollection}>Add to Collection</button>
      )}
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
  onAddToCollection: PropTypes.func.isRequired,
  onRemoveFromCollection: PropTypes.func.isRequired,
};

export default ImageCard;
