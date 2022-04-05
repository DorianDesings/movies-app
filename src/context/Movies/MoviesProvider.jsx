import { useEffect, useReducer } from 'react';
import {
	fetchTopRatedMovies,
	fetchTrendingMovies,
	searchMovies
} from '../../lib/api/fetchMovies';
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
	setSearch: value => setMoviesData({ type: 'SET_SEARCH', search: value }),
	setTrendingMovies: movies => {
		setMoviesData({
			type: 'SET_TRENDING_MOVIES',
			trendingMovies: movies
		});
	},
	setTopRatedMovies: movies => {
		setMoviesData({
			type: 'SET_TOP_RATED_MOVIES',
			topRatedMovies: movies
		});
	},
	setSearchMovies: movies => {
		setMoviesData({
			type: 'SET_MOVIES',
			movies: movies
		});
	}
});

const setTrending = async setTrendingMovies => {
	const movies = await fetchTrendingMovies();
	setTrendingMovies(movies);
};

const setTopRated = async setTopRatedMovies => {
	const movies = await fetchTopRatedMovies();
	setTopRatedMovies(movies);
};

const setMovies = async (moviesData, setSearchMovies) => {
	const movies = await searchMovies(moviesData);
	setSearchMovies(movies);
};

const MoviesProvider = ({ children }) => {
	const [moviesData, setMoviesData] = useReducer(moviesReducer, INITIAL_STATE);

	const { setSearch, setTrendingMovies, setTopRatedMovies, setSearchMovies } =
		getActions(setMoviesData);

	useEffect(() => {
		setTrending(setTrendingMovies);
		setTopRated(setTopRatedMovies);
	}, []);

	useEffect(() => {
		setMovies(moviesData, setSearchMovies);
	}, [moviesData.search, moviesData.currentPage]);

	return (
		<MoviesContext.Provider value={{ moviesData, setMoviesData, setSearch }}>
			{children}
		</MoviesContext.Provider>
	);
};

export default MoviesProvider;
