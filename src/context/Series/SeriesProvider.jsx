import { useEffect, useReducer } from 'react';
import {
	fetchPopularSeries,
	fetchTopRatedSeries,
	fetchTrendingSeries
} from '../../hooks/useFetchSeries';
import { SeriesContext } from './SeriesContext';
import { SeriesReducer } from './SeriesReducer';

const INITIAL_STATE = {
	search: '',
	trendingSeries: [],
	topRatedSeries: [],
	series: [],
	currentPage: 1
};

const SeriesProvider = ({ children }) => {
	const [seriesData, setSeriesData] = useReducer(SeriesReducer, INITIAL_STATE);

	useEffect(() => {
		fetchTrendingSeries(setSeriesData);
		fetchTopRatedSeries(setSeriesData);
	}, []);

	useEffect(() => {
		fetchPopularSeries(seriesData, setSeriesData);
	}, [seriesData.currentPage]);

	return (
		<SeriesContext.Provider value={{ seriesData, setSeriesData }}>
			{children}
		</SeriesContext.Provider>
	);
};

export default SeriesProvider;
