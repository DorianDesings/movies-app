import { useReducer } from 'react';
import { FavouritesReducer } from '../context/Favourite/FavouritesReducer';

const INITIAL_STATE = {
	search: '',
	favouriteMovies: [],
	favouriteSeries: []
};

const getActions = setFavouritesData => ({
	setFavouriteMovie: favouriteMovie =>
		setFavouritesData({
			type: 'SET_FAVOURITE_MOVIE',
			favouriteMovie
		}),
	deleteFavouriteMovie: id =>
		setFavouritesData({
			type: 'DELETE_FAVOURITE_MOVIE',
			id
		}),

	setFavouriteSerie: favouriteSerie =>
		setFavouritesData({
			type: 'SET_FAVOURITE_SERIE',
			favouriteSerie
		}),
	deleteFavouriteSerie: id =>
		setFavouritesData({
			type: 'DELETE_FAVOURITE_SERIE',
			id
		})
});

export const useFavourites = () => {
	const [favouritesData, setFavouritesData] = useReducer(
		FavouritesReducer,
		INITIAL_STATE
	);

	const {
		setFavouriteMovie,
		deleteFavouriteMovie,
		setFavouriteSerie,
		deleteFavouriteSerie
	} = getActions(setFavouritesData);

	const isFavourite = (id, type) => {
		if (type === 'movie')
			return !!favouritesData.favouriteMovies.find(movie => movie.id === id);
		return !!favouritesData.favouriteSeries.find(serie => serie.id === id);
	};

	const toggleMovie = (id, title, poster_path) => {
		const index = favouritesData.favouriteMovies.findIndex(
			movie => movie.id === id
		);

		if (index === -1) {
			const favouriteMovie = { id, title, poster_path };
			setFavouriteMovie(favouriteMovie);
		} else {
			deleteFavouriteMovie(id);
		}
	};

	const toggleSerie = (id, name, poster_path) => {
		const index = favouritesData.favouriteSeries.findIndex(
			serie => serie.id === id
		);

		if (index === -1) {
			const favouriteSerie = { id, name, poster_path };
			setFavouriteSerie(favouriteSerie);
		} else {
			deleteFavouriteSerie(id);
		}
	};

	return { toggleMovie, toggleSerie, isFavourite, favouritesData };
};
