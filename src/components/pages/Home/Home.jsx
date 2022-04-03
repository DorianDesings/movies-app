import { useContext } from 'react';
import { MoviesContext } from '../../../context/Movies/MoviesContext';
import { SeriesContext } from '../../../context/Series/SeriesContext';
import Banner from '../../Banner/Banner';
import Carousel from '../../Carousel/Carousel';

const Home = () => {
	const { moviesData } = useContext(MoviesContext);
	const { seriesData } = useContext(SeriesContext);
	return (
		<>
			<Banner />
			<Carousel title='Trending Movies' cards={moviesData.trendingMovies} />
			<Carousel title='Top Rated Movies' cards={moviesData.topRatedMovies} />
			<Carousel title='Trending Series' cards={seriesData.trendingSeries} />
			<Carousel title='Top Rated Series' cards={seriesData.topRatedSeries} />
		</>
	);
};

export default Home;
