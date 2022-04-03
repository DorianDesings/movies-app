import { useContext } from 'react';
import { MoviesContext } from '../../../context/Movies/MoviesContext';
import Banner from '../../Banner/Banner';
import Carousel from '../../Carousel/Carousel';

const Home = () => {
	const { moviesData } = useContext(MoviesContext);
	return (
		<>
			<Banner />
			<Carousel title='Trending Movies' cards={moviesData.trendingMovies} />
			{/* <Carousel title='Top Rated Movies' cards={moviesData.topRatedMovies} /> */}
		</>
	);
};

export default Home;
