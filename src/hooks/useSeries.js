import { useEffect, useReducer } from 'react';
import { SeriesReducer } from '../context/Series/SeriesReducer';
import {
	fetchTopRatedSeries,
	fetchTrendingSeries,
	searchSeries
} from '../lib/api/fetchSeries';

const getActions = setSeriesData => ({
	setSearch: value => setSeriesData({ type: 'SET_SEARCH', search: value }),
	setPage: newPage =>
		setSeriesData({
			type: 'SET_PAGE',
			currentPage: newPage
		}),
	setTrendingSeries: series => {
		setSeriesData({
			type: 'SET_TRENDING_SERIES',
			trendingSeries: series
		});
	},
	setTopRatedSeries: series => {
		setSeriesData({
			type: 'SET_TOP_RATED_SERIES',
			topRatedSeries: series
		});
	},
	setSearchSeries: series => {
		setSeriesData({
			type: 'SET_SERIES',
			series: series
		});
	}
});

const setTrending = async setTrendingSeries => {
	const series = await fetchTrendingSeries();
	setTrendingSeries(series);
};

const setTopRated = async setTopRatedSeries => {
	const series = await fetchTopRatedSeries();
	setTopRatedSeries(series);
};

const setSeries = async (seriesData, setSearchSeries) => {
	const series = await searchSeries(seriesData);
	setSearchSeries(series);
};

const INITIAL_STATE = {
	search: '',
	trendingSeries: [],
	topRatedSeries: [],
	series: [],
	currentPage: 1
};

export const useSeries = () => {
	const [seriesData, setSeriesData] = useReducer(SeriesReducer, INITIAL_STATE);

	const {
		setSearch,
		setTrendingSeries,
		setTopRatedSeries,
		setSearchSeries,
		setPage
	} = getActions(setSeriesData);

	useEffect(() => {
		setTrending(setTrendingSeries);
		setTopRated(setTopRatedSeries);
	}, []);

	useEffect(() => {
		setSeries(seriesData, setSearchSeries);
	}, [seriesData.search, seriesData.currentPage]);

	return { seriesData, setPage, setSearch };
};
