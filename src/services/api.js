import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  },
});

export const getPhotos = (page, perPage) =>
  api.get("/photos", {
    params: {
      page,
      per_page: perPage,
    },
  });

export const getPhoto = (id) => api.get(`/photos/${id}`);

export const getPhotosByTag = (tag, page, perPage) =>
  api.get("/search/photos", {
    params: { query: tag, page, per_page: perPage },
  });
