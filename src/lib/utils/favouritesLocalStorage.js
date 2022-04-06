const LS_KEY = 'favourites';

export const saveFavouritesToLocalStorage = data => {
	localStorage.setItem(LS_KEY, JSON.stringify(data));
};

export const getFavouritesFromLocalStorage = () => {
	const defaultData = {
		favouriteMovies: [],
		favouriteSeries: []
	};
	try {
		const parsedJson = JSON.parse(localStorage.getItem(LS_KEY));

		const checkContent = () =>
			Object.values.every(value => Array.isArray(value));

		const checkNames = () =>
			Object.getOwnPropertyNames(defaultData).every(name =>
				Object.hasOwn(parsedJson, name)
			);

		if (!checkContent || !checkNames) throw new Error();

		return parsedJson;
	} catch {
		saveFavouritesToLocalStorage(defaultData);
		return defaultData;
	}
};
