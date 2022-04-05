import { useContext } from 'react';
import { MoviesContext } from '../../../context/Movies/MoviesContext';
import Cards from '../../Cards/Cards';
import Search from '../../Search/Search';

const Movies = () => {
	const { moviesData, setPage, setSearch } = useContext(MoviesContext);
	return (
		<>
			<Search title={'Movies'} setValue={setSearch} value={moviesData.search} />
			<Cards cards={moviesData.movies} type='movie' />
			<button onClick={() => setPage(moviesData.currentPage + 1)}>NEXT</button>
		</>
	);
};

export default Movies;
