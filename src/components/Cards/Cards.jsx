import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavouritesContext } from '../../context/Favourite/FavouritesContext';
import Card from '../Card/Card';
import { StyledCards, StyledFavourite } from './cards.styles';

const Cards = ({ cards, type }) => {
	const { favouritesData, setFavouritesData, toggleMovie, toggleSerie } =
		useContext(FavouritesContext);

	const toggleFavourite = type === 'movie' ? toggleMovie : toggleSerie;

	return (
		<StyledCards>
			{cards &&
				cards.map(card => (
					<>
						<Link to={`/details/${type}/${card.id}`}>
							<Card img={card.poster_path} title={card.title || card.name}>
								<StyledFavourite
									isFavourite={isFavourite(card.id, type, favouritesData)}
									onClick={e => {
										e.preventDefault();
										toggleFavourite(
											card.id,
											card.poster_path,
											favouritesData,
											setFavouritesData
										);
									}}
								/>
							</Card>
						</Link>
					</>
				))}
		</StyledCards>
	);
};

const isFavourite = (id, type, favouritesData) => {
	if (type === 'movie')
		return !!favouritesData.favouriteMovies.find(movie => movie.id === id);
	return !!favouritesData.favouriteSeries.find(serie => serie.id === id);
};

export default Cards;
