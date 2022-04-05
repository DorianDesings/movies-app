import { useEffect, useReducer } from 'react';
import { moviesReducer } from '../context/Movies/MoviesReducer';
import {
	fetchTopRatedMovies,
	fetchTrendingMovies,
	searchMovies
} from '../lib/api/fetchMovies';

const getActions = setMoviesData => ({
	setSearch: value => setMoviesData({ type: 'SET_SEARCH', search: value }),
	setPage: newPage =>
		setMoviesData({
			type: 'SET_PAGE',
			currentPage: newPage
		}),
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

const INITIAL_STATE = {
	search: '',
	trendingMovies: [],
	topRatedMovies: [],
	movies: [],
	currentPage: 1
};

export const useMovies = () => {
	const [moviesData, setMoviesData] = useReducer(moviesReducer, INITIAL_STATE);

	const {
		setSearch,
		setTrendingMovies,
		setTopRatedMovies,
		setSearchMovies,
		setPage
	} = getActions(setMoviesData);

	useEffect(() => {
		setTrending(setTrendingMovies);
		setTopRated(setTopRatedMovies);
	}, []);

	useEffect(() => {
		setMovies(moviesData, setSearchMovies);
	}, [moviesData.search, moviesData.currentPage]);

	return { moviesData, setPage, setSearch };
};
