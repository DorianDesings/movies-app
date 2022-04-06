import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import {
	StyledCarousel,
	StyledCarouselHeader,
	StyledTitle,
	StyledViewMore
} from './carousel.styles';
const Carousel = ({ title, cards, route = '/', type }) => (
	<>
		<StyledCarouselHeader>
			<StyledTitle>{title}</StyledTitle>
			<Link to={route}>
				<StyledViewMore>View More</StyledViewMore>
			</Link>
		</StyledCarouselHeader>
		<StyledCarousel>
			{cards &&
				cards.map(card => (
					<Link key={card.id} to={`/details/${type}/${card.id}`}>
						<Card
							key={card.id}
							img={card.poster_path}
							title={card.title || card.name}
						/>
					</Link>
				))}
		</StyledCarousel>
	</>
);
export default Carousel;
