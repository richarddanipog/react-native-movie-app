import { getTrendingMovies } from '@/services/appwrite';
import { fetchMovieDetails, fetchMovies } from '@/services/moviesService';
import { useQuery } from '@tanstack/react-query';

export const useFetchMovies = (query: { query: string }, enable = true) => {
  return useQuery({
    queryKey: ['movies', query], // Caches requests by search term
    queryFn: () => fetchMovies(query),
    staleTime: 1000 * 60 * 5,
    enabled: !!enable,
  });
};

export const useFetchTrendingMovies = () => {
  return useQuery({
    queryKey: ['trendingMovies'], // Caches requests by search term
    queryFn: () => getTrendingMovies(),
  });
};

export const useFetchMovieDetails = (movieId: string) => {
  return useQuery({
    queryKey: ['movieDetail', movieId],
    queryFn: () => fetchMovieDetails(movieId),
    staleTime: 1000 * 60 * 5,
    enabled: !!movieId,
  });
};
