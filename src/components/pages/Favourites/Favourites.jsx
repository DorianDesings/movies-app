import { useContext } from 'react';
import { FavouritesContext } from '../../../context/Favourite/FavouritesContext';
import { useFilters } from '../../../hooks/useFilters';
import Card from '../../Card/Card';
import { StyledCards } from '../../Cards/cards.styles';

const Favourites = () => {
	const { toggleMovie, toggleSerie } = useContext(FavouritesContext);

	const { filter, setFilter, favourites } = useFilters();

	return (
		<>
			<select value={filter} onChange={e => setFilter(e.target.value)}>
				<option value='all'>All</option>
				<option value='movies'>Movies</option>
				<option value='series'>Series</option>
			</select>
			<StyledCards>
				{favourites.map(favourite => (
					<Card
						key={favourite.id}
						img={favourite.poster_path}
						title={favourite.title || favourite.name}
					/>
				))}
			</StyledCards>
		</>
	);
};

export default Favourites;
