import { fetchApi } from '../lib/utils/fetchApi';

export const searchMovies = async (moviesData, setMoviesData) => {
	const { search, currentPage } = moviesData;
	const endPoint = search ? '/search/movie' : '/movie/popular/';

	const movies = await fetchApi(endPoint, currentPage, search);

	if (movies) {
		setMoviesData({
			type: 'SET_MOVIES',
			movies: movies.results
		});
	} else {
		// Action de error
	}
};

export const fetchTrendingMovies = async setMoviesData => {
	const trendingMovies = await fetchApi('/trending/movie/day');

	if (trendingMovies) {
		setMoviesData({
			type: 'SET_TRENDING_MOVIES',
			trendingMovies: trendingMovies.results
		});
	} else {
		// Action de error
	}
};

export const fetchTopRatedMovies = async setMoviesData => {
	const topRatedMovies = await fetchApi('/movie/top_rated');

	if (topRatedMovies) {
		setMoviesData({
			type: 'SET_TOP_RATED_MOVIES',
			topRatedMovies: topRatedMovies.results
		});
	} else {
		// Action de error
	}
};
