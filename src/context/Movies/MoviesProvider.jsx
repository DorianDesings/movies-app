import { useEffect, useReducer } from 'react';
import { API_KEY, API_URL, API_VERSION } from '../../constants/api';
import { fetchMovies } from '../../lib/utils/fetchMovies';
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
	const response = await fetchMovies('/trending/movie/day');

	if (response) {
		setMoviesData({
			type: 'SET_TRENDING_MOVIES',
			trendingMovies: response.results
		});
	} else {
		// Action de error
	}
};

const fetchTopRatedMovies = async setMoviesData => {
	try {
		const response = await fetch(
			`${API_URL}${API_VERSION}/movie/top_rated?api_key=${API_KEY}`
		);

		const parsedResponse = await response.json();

		if (parsedResponse) {
			setMoviesData({
				type: 'SET_TOP_RATED_MOVIES',
				topRatedMovies: parsedResponse.results
			});
		} else {
			// Action de error
		}
	} catch (error) {}
};

export default MoviesProvider;
