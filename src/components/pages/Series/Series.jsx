import { useContext } from 'react';
import { SeriesContext } from '../../../context/Series/SeriesContext';
import Cards from '../../Cards/Cards';
import Search from '../../Search/Search';

const Series = () => {
	const { seriesData, setPage, setSearch } = useContext(SeriesContext);

	console.log('SERIES', seriesData);
	return (
		<>
			<Search title={'Series'} setValue={setSearch} value={seriesData.search} />
			<Cards cards={seriesData.series} type='tv' />
			<button onClick={() => setPage(seriesData.currentPage + 1)}>NEXT</button>
		</>
	);
};

export default Series;
