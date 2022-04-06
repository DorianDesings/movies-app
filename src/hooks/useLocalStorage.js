import { useEffect } from 'react';
import { saveFavouritesToLocalStorage } from '../lib/utils/favouritesLocalStorage';

export const useLocalStorage = favouritesData => {
	useEffect(() => {
		console.log('FAVOURITE ADDED', favouritesData);
		saveFavouritesToLocalStorage(favouritesData);
	}, [favouritesData.favouriteMovies, favouritesData.favouriteSeries]);
};
