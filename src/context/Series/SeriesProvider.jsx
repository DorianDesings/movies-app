import { useEffect, useReducer } from 'react';
import { fetchApi } from '../../lib/utils/fetchApi';
import { SeriesContext } from './SeriesContext';
import { SeriesReducer } from './SeriesReducer';

const INITIAL_STATE = {
	trendingSeries: [],
	topRatedSeries: []
};

const SeriesProvider = ({ children }) => {
	const [seriesData, setSeriesData] = useReducer(SeriesReducer, INITIAL_STATE);

	useEffect(() => {
		fetchTrendingSeries(setSeriesData);
		fetchTopRatedSeries(setSeriesData);
	}, []);

	return (
		<SeriesContext.Provider value={{ seriesData }}>
			{children}
		</SeriesContext.Provider>
	);
};

const fetchTrendingSeries = async setSeriesData => {
	const trendingSeries = await fetchApi('/trending/tv/day');

	if (trendingSeries) {
		setSeriesData({
			type: 'SET_TRENDING_SERIES',
			trendingSeries: trendingSeries.results
		});
	} else {
		// Action de error
	}
};

const fetchTopRatedSeries = async setSeriesData => {
	const topRatedSeries = await fetchApi('/tv/top_rated');

	if (topRatedSeries) {
		setSeriesData({
			type: 'SET_TOP_RATED_SERIES',
			topRatedSeries: topRatedSeries.results
		});
	} else {
		// Action de error
	}
};

export default SeriesProvider;
