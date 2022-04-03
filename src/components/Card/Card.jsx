import { StyledCard } from './card.styles';

const Card = ({ img, title }) => (
	<StyledCard>
		<img src={`https://image.tmdb.org/t/p/w440_and_h660_face${img}`} alt='' />
		<h3>{title}</h3>
	</StyledCard>
);

export default Card;
