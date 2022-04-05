import { useContext } from 'react';
import { MoviesContext } from '../../../context/Movies/MoviesContext';
import Cards from '../../Cards/Cards';
import Search from '../../Search/Search';

const Movies = () => {
	const { moviesData, setMoviesData, setSearch } = useContext(MoviesContext);
	return (
		<>
			<Search title={'Movies'} setValue={setSearch} value={moviesData.search} />
			<Cards cards={moviesData.movies} type='movie' />
			<button
				onClick={() =>
					nextMoviesResults(moviesData.currentPage + 1, setMoviesData)
				}
			>
				NEXT
			</button>
		</>
	);
};

const nextMoviesResults = (page, setMoviesData) => {
	setMoviesData({
		type: 'SET_PAGE',
		currentPage: page
	});
};

export default Movies;
