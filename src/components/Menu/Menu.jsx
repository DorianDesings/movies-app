import { NavLink } from 'react-router-dom';
import { StyledMenu } from './menu.styles';

const Menu = () => {
	return (
		<StyledMenu>
			<NavLink to={'/'} active='active'>
				<li>Home</li>
			</NavLink>
			<NavLink to={'/movies'}>
				<li>Movies</li>
			</NavLink>
			<NavLink to={'/series'}>
				<li>Tv Series</li>
			</NavLink>
			<NavLink to={'/favourites'}>
				<li>Favourites</li>
			</NavLink>
		</StyledMenu>
	);
};

export default Menu;
