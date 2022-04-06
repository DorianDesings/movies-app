import { useFavourites } from '../../hooks/useFavourites';
import { FavouritesContext } from './FavouritesContext';

const FavouritesProvider = ({ children }) => {
	const { toggleMovie, toggleSerie, isFavourite, favouritesData } =
		useFavourites();

	return (
		<FavouritesContext.Provider
			value={{ toggleMovie, toggleSerie, isFavourite, favouritesData }}
		>
			{children}
		</FavouritesContext.Provider>
	);
};

export default FavouritesProvider;
