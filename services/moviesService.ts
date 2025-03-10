import api from './api';

export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  try {
    const endpoint = query
      ? `/search/movie?query=${encodeURIComponent(query)}`
      : '/discover/movie?sort_by=popularity.desc';

    const { data } = await api.get(endpoint);

    return data.results;
  } catch (error) {
    console.error('Error fetching meals:', error);

    return [];
  }
};
