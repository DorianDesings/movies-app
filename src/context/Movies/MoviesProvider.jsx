import { useEffect, useReducer } from 'react';
import { fetchApi } from '../../lib/utils/fetchApi';
import { MoviesContext } from './MoviesContext';
import { moviesReducer } from './MoviesReducer';

const INITIAL_STATE = {
	trendingMovies: []
};

const MoviesProvider = ({ children }) => {
	const [moviesData, setMoviesData] = useReducer(moviesReducer, INITIAL_STATE);

	useEffect(() => {
		fetchTrendingMovies(setMoviesData);
		fetchTopRatedMovies(setMoviesData);
	}, []);

	return (
		<MoviesContext.Provider value={{ moviesData }}>
			{children}
		</MoviesContext.Provider>
	);
};

const fetchTrendingMovies = async setMoviesData => {
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

const fetchTopRatedMovies = async setMoviesData => {
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

export default MoviesProvider;
