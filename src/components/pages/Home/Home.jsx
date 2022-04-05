import { useContext } from 'react';
import { MoviesContext } from '../../../context/Movies/MoviesContext';
import { SeriesContext } from '../../../context/Series/SeriesContext';
import Banner from '../../Banner/Banner';
import Carousel from '../../Carousel/Carousel';

const Home = () => {
	const { moviesData } = useContext(MoviesContext);
	const { seriesData } = useContext(SeriesContext);

	console.log(moviesData);
	return (
		<>
			<Banner />
			<Carousel
				title='Trending Movies'
				cards={moviesData.trendingMovies}
				route='/movies'
				type='movie'
			/>
			<Carousel
				title='Top Rated Movies'
				cards={moviesData.topRatedMovies}
				route='/movies'
				type='movie'
			/>
			<Carousel
				title='Trending Series'
				cards={seriesData.trendingSeries}
				route='/series'
				type='tv'
			/>
			<Carousel
				title='Top Rated Series'
				cards={seriesData.topRatedSeries}
				route='/series'
				type='tv'
			/>
		</>
	);
};

export default Home;
