import { useReducer } from 'react';
import { FavouritesContext } from './FavouritesContext';
import { FavouritesReducer } from './FavouritesReducer';

const INITIAL_STATE = {
	search: '',
	favouriteMovies: [],
	favouriteSeries: []
};

const toggleMovie = (id, poster_path, favouritesData, setFavouritesData) => {
	const index = favouritesData.favouriteMovies.findIndex(
		movie => movie.id === id
	);

	const favouriteMovie = { id, poster_path };

	index === -1
		? setFavouritesData({
				type: 'SET_FAVOURITE_MOVIE',
				favouriteMovie
		  })
		: setFavouritesData({
				type: 'DELETE_FAVOURITE_MOVIE',
				id
		  });
};

const toggleSerie = (id, poster_path, favouritesData, setFavouritesData) => {
	const index = favouritesData.favouriteSeries.findIndex(
		serie => serie.id === id
	);

	const favouriteSerie = { id, poster_path };

	index === -1
		? setFavouritesData({
				type: 'SET_FAVOURITE_SERIE',
				favouriteSerie
		  })
		: setFavouritesData({
				type: 'DELETE_FAVOURITE_SERIE',
				id
		  });
};

const FavouritesProvider = ({ children }) => {
	const [favouritesData, setFavouritesData] = useReducer(
		FavouritesReducer,
		INITIAL_STATE
	);
	return (
		<FavouritesContext.Provider
			value={{ favouritesData, setFavouritesData, toggleMovie, toggleSerie }}
		>
			{children}
		</FavouritesContext.Provider>
	);
};

export default FavouritesProvider;
