export const FavouritesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_FAVOURITE_MOVIE':
			return {
				...state,
				favouriteMovies: [...state.favouriteMovies, action.favouriteMovie]
			};

		case 'DELETE_FAVOURITE_MOVIE':
			return {
				...state,
				favouriteMovies: state.favouriteMovies.filter(
					movie => movie.id !== action.id
				)
			};
		case 'SET_FAVOURITE_SERIE':
			return {
				...state,
				favouriteSeries: [...state.favouriteSeries, action.favouriteSerie]
			};

		case 'DELETE_FAVOURITE_SERIE':
			return {
				...state,
				favouriteSeries: state.favouriteSeries.filter(
					serie => serie.id !== action.id
				)
			};

		default:
			return state;
	}
};
