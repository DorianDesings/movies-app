import Card from '../Card/Card';
import { StyledCarousel } from './carousel.styles';

const Carousel = ({ title, cards }) => (
	<>
		<h2 style={{ padding: '0 1.5rem' }}>{title}</h2>
		<StyledCarousel>
			{cards.map(card => (
				<Card key={card.id} img={card.poster_path} title={card.title} />
			))}
		</StyledCarousel>
	</>
);

export default Carousel;
