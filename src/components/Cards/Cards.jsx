import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavouritesContext } from '../../context/Favourite/FavouritesContext';
import Card from '../Card/Card';
import { StyledCards, StyledFavourite } from './cards.styles';

const Cards = ({ cards, type }) => {
	const { toggleMovie, toggleSerie, isFavourite } =
		useContext(FavouritesContext);

	const toggleFavourite = type === 'movie' ? toggleMovie : toggleSerie;

	return (
		<StyledCards>
			{cards &&
				cards.map(card => (
					<Link key={card.id} to={`/details/${type}/${card.id}`}>
						<Card
							key={card.id}
							img={card.poster_path}
							title={card.title || card.name}
						>
							<StyledFavourite
								isFavourite={isFavourite(card.id, type)}
								onClick={e => {
									e.preventDefault();
									toggleFavourite(
										card.id,
										card.title || card.name,
										card.poster_path
									);
								}}
							/>
						</Card>
					</Link>
				))}
		</StyledCards>
	);
};

export default Cards;
