import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPhotosByTag } from "../services/api";
import ImageCard from "./ImageCard";

const TagGallery = () => {
  const { tag } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(3);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPhotosByTag(tag, page);
  }, [tag, page]);

  const fetchPhotosByTag = async (tag, page) => {
    setLoading(true);
    try {
      const response = await getPhotosByTag(tag, page, 10);
      setPhotos(response.data.results);
      setTotalPages(Math.ceil(response.headers["x-total"] / 10));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photos by tag:", error);
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <h1>{`Photos tagged with "${tag.toLocaleUpperCase()}"`}</h1>
      <button onClick={() => setColumns(columns === 3 ? 5 : 3)}>{columns === 3 ? "Show 5 Columns" : "Show 3 Columns"}</button>
      {photos && photos.length > 0 ? (
        <div className="gallery" style={{ columnCount: columns }}>
          {photos.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </div>
      ) : (
        <p>No photos found</p>
      )}
      {loading && <p>Loading...</p>}
      <div className="pagination">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TagGallery;
