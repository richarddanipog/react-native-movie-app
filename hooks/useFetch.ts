import { fetchMovies } from '@/services/moviesService';
import { useQuery } from '@tanstack/react-query';

export const useFetchMovies = (query: { query: string }) => {
  return useQuery({
    queryKey: ['movies'], // Caches requests by search term
    queryFn: () => fetchMovies(query),
    staleTime: 1000 * 60 * 5,
  });
};
