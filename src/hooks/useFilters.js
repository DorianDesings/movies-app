import { useContext, useState } from 'react';
import { FavouritesContext } from '../context/Favourite/FavouritesContext';

export const useFilters = () => {
	const { favouritesData } = useContext(FavouritesContext);
	const [filter, setFilter] = useState('all');

	let favourites = [];

	if (filter === 'all') {
		favourites = [
			...favouritesData.favouriteMovies,
			...favouritesData.favouriteSeries
		];
	} else if (filter === 'movies') {
		favourites = favouritesData.favouriteMovies;
	} else {
		favourites = favouritesData.favouriteSeries;
	}

	return { filter, setFilter, favourites };
};
