import PropTypes from "prop-types";

const Collection = ({ images, onRemoveFromCollection }) => {
  return (
    <div className="gallery">
      {images.map((photo) => (
        <div className="image-card" key={photo.id}>
          <img src={photo.urls.small} alt={photo.alt} />
          <button onClick={() => onRemoveFromCollection(photo.id)}>Remove from Collection</button>
        </div>
      ))}
    </div>
  );
};

Collection.propTypes = {
  images: PropTypes.array.isRequired,
  onRemoveFromCollection: PropTypes.func.isRequired,
};

export default Collection;
