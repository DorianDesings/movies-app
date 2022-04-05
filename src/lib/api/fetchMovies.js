import { fetchApi } from '../utils/fetchApi';

export const searchMovies = async ({ search, currentPage }) => {
	const endPoint = search ? '/search/movie' : '/movie/popular/';

	const movies = await fetchApi(endPoint, currentPage, search);

	if (movies) {
		return movies.results;
	}
	return [];
	// Action de error
};

export const fetchTrendingMovies = async () => {
	const trendingMovies = await fetchApi('/trending/movie/day');

	if (trendingMovies) {
		return trendingMovies.results;
	}
	return [];
	// Action de error
};

export const fetchTopRatedMovies = async () => {
	const topRatedMovies = await fetchApi('/movie/top_rated');

	if (topRatedMovies) {
		return topRatedMovies.results;
	}
	return [];
	// Action de error
};
