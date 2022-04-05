import { useMovies } from '../../hooks/useMovies';
import { MoviesContext } from './MoviesContext';

const MoviesProvider = ({ children }) => {
	const { moviesData, setPage, setSearch } = useMovies();
	return (
		<MoviesContext.Provider value={{ moviesData, setPage, setSearch }}>
			{children}
		</MoviesContext.Provider>
	);
};

export default MoviesProvider;
