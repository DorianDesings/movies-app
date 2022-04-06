import { useSeries } from '../../hooks/useSeries';
import { SeriesContext } from './SeriesContext';

const SeriesProvider = ({ children }) => {
	const { seriesData, setPage, setSearch } = useSeries();
	return (
		<SeriesContext.Provider value={{ seriesData, setPage, setSearch }}>
			{children}
		</SeriesContext.Provider>
	);
};

export default SeriesProvider;
