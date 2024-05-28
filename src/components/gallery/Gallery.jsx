import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPhotos, getPhotosByTag } from "../../services/api";
import ImageCard from "../ImageCard";
import GalleryPagination from "./GalleryPagination";
import GallerySearch from "./GallerySearch";
import GalleryColumnsToggle from "./GalleryColumnsToggle";

const Gallery = () => {
  const { tag } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(3);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPhotos(page, searchQuery, tag);
  }, [page, searchQuery, tag]);

  const fetchPhotos = async (page, query = "", tag = "") => {
    setLoading(true);
    try {
      const response = tag
        ? await getPhotosByTag(tag, page, 10)
        : query
        ? await getPhotosByTag(query, page, 10)
        : await getPhotos(page, 10);
      const data = tag || query ? response.data.results : response.data;
      setPhotos(data);
      const totalPhotos = response.headers["x-total"];
      setTotalPages(totalPhotos ? Math.ceil(totalPhotos / 10) : 1);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      {!tag && <GallerySearch setSearchQuery={setSearchQuery} />}
      <GalleryColumnsToggle columns={columns} setColumns={setColumns} />
      <div className="gallery" style={{ columnCount: columns }}>
        {photos.map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <GalleryPagination page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
    </div>
  );
};

export default Gallery;
