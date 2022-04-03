const LS_KEY = 'favouriteMovies';

export const saveFavouritesToLocalStorage = data => {
	localStorage.setItem(LS_KEY, JSON.stringify(data));
};

export const getFavouritesFromLocalStorage = () => {
	try {
		const parsedJson = JSON.parse(localStorage.getItem(LS_KEY));
		if (
			!Array.isArray(parsedJson) ||
			!parsedJson.every(value => typeof value === 'object')
		)
			throw new Error();

		return parsedJson;
	} catch {
		saveFavouritesToLocalStorage([]);
		return [];
	}
};
