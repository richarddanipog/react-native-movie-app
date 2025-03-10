import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_TMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
});

export default api;
