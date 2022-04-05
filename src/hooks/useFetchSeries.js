import { fetchApi } from '../lib/utils/fetchApi';

export const searchSerie = async (newSearch, setSeriesData) => {
	setSeriesData({
		type: 'SET_SEARCH',
		search: newSearch
	});

	const series = await fetchApi(`/search/tv`, 1, newSearch);

	if (series) {
		setSeriesData({
			type: 'SET_SERIES',
			series: series.results
		});
	} else {
		// Action de error
	}
};

export const fetchPopularSeries = async (seriesData, setSeriesData) => {
	const series = await fetchApi('/tv/popular/', seriesData.currentPage);
	if (series) {
		setSeriesData({
			type: 'SET_SERIES',
			series: series.results
		});
	} else {
		// Action de error
	}
};

export const fetchTrendingSeries = async setSeriesData => {
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

export const fetchTopRatedSeries = async setSeriesData => {
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
