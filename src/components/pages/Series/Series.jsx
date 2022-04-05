import { useContext } from 'react';
import { SeriesContext } from '../../../context/Series/SeriesContext';
import { fetchPopularSeries, searchSerie } from '../../../hooks/useFetchSeries';
import Cards from '../../Cards/Cards';
import Search from '../../Search/Search';

const Series = () => {
	const { seriesData, setSeriesData } = useContext(SeriesContext);
	return (
		<>
			<Search
				data={seriesData}
				setData={setSeriesData}
				type='Series'
				fetch={fetchPopularSeries}
				searchType={searchSerie}
			/>
			<Cards cards={seriesData.series} type='series' />
			<button
				onClick={() =>
					nextSeriesResults(seriesData.currentPage + 1, setSeriesData)
				}
			>
				NEXT
			</button>
		</>
	);
};

const nextSeriesResults = (page, setSeriesData) => {
	setSeriesData({
		type: 'SET_PAGE',
		currentPage: page
	});
};

export default Series;
