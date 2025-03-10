import { fetchMovies } from '@/services/moviesService';
import { useQuery } from '@tanstack/react-query';

export const useFetchMovies = (query: { query: string }, enable = true) => {
  return useQuery({
    queryKey: ['movies', query], // Caches requests by search term
    queryFn: () => fetchMovies(query),
    staleTime: 1000 * 60 * 5,
    enabled: !!enable,
  });
};
