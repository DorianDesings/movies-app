import { useEffect, useReducer } from 'react';
import {
	fetchTopRatedMovies,
	fetchTrendingMovies,
	searchMovies
} from '../../hooks/useFetchMovies';
import { MoviesContext } from './MoviesContext';
import { moviesReducer } from './MoviesReducer';

const INITIAL_STATE = {
	search: '',
	trendingMovies: [],
	topRatedMovies: [],
	movies: [],
	currentPage: 1
};

const getActions = setMoviesData => ({
	setSearch: value => setMoviesData({ type: 'SET_SEARCH', search: value })
});

const MoviesProvider = ({ children }) => {
	const [moviesData, setMoviesData] = useReducer(moviesReducer, INITIAL_STATE);

	const actions = getActions(setMoviesData);

	useEffect(() => {
		fetchTrendingMovies(setMoviesData);
		fetchTopRatedMovies(setMoviesData);
	}, []);

	useEffect(() => {
		searchMovies(moviesData, setMoviesData);
	}, [moviesData.search, moviesData.currentPage]);

	return (
		<MoviesContext.Provider value={{ moviesData, setMoviesData, ...actions }}>
			{children}
		</MoviesContext.Provider>
	);
};

export default MoviesProvider;
