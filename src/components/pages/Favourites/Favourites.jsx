import { useContext } from 'react';
import { FavouritesContext } from '../../../context/Favourite/FavouritesContext';

const Favourites = () => {
	const { favouritesData, setFavouritesData, toggleMovie, toggleSerie } =
		useContext(FavouritesContext);

	return (
		<>
			<h1>Favourites</h1>
		</>
	);
};

export default Favourites;
