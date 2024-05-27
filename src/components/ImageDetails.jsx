import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPhoto } from "../services/api";

const ImageDetails = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhoto(id);
  }, [id]);

  const fetchPhoto = async (id) => {
    try {
      const response = await getPhoto(id);
      setPhoto(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photo details:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!photo) {
    return <p>No photo details found</p>;
  }

  return (
    <div>
      <img src={photo.urls.regular} alt={photo.alt_description} />
      <h2>{photo.description || "No Description"}</h2>
      <p>By {photo.user.name}</p>
      <p>Likes: {photo.likes}</p>
      <p>
        Tags:{" "}
        {photo.tags.map((tag, index) => (
          <span key={tag.title}>
            <Link to={`/tag/${tag.title}`}>{tag.title}</Link>
            {index < photo.tags.length - 1 && ", "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ImageDetails;
