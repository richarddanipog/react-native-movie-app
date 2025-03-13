import api from './api';

export const fetchMovies = async ({
  query,
}: {
  query: string;
}): Promise<Movie[]> => {
  try {
    const endpoint = query
      ? `/search/movie?query=${encodeURIComponent(query)}`
      : '/movie/popular';

    const { data } = await api.get(endpoint);
    const movies = data.results;

    return movies;
  } catch (error) {
    console.error('Error fetching meals:', error);

    return [];
  }
};

const _getMovieCasts = async (movieId: string) => {
  const { data } = await api.get(
    `/movie/${movieId}/credits?api_key=${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  );

  return data.cast || [];
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const { data } = await api.get(
      `/movie/${movieId}?api_key=${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    );

    const movieCast = await _getMovieCasts(movieId);
    const movie: MovieDetails = {
      ...data,
      cast: movieCast,
    };

    return movie;
  } catch (error) {
    console.error('Error fetching meals:', error);

    return {} as MovieDetails;
  }
};
