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
    const movies = data.results;

    return movies;
  } catch (error) {
    console.error('Error fetching meals:', error);

    return [];
  }
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const { data } = await api.get(
      `/movie/${movieId}?api_key=${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    );

    return data;
  } catch (error) {
    console.error('Error fetching meals:', error);

    return {} as MovieDetails;
  }
};
