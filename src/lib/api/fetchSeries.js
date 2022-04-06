import { fetchApi } from '../utils/fetchApi';

export const searchSeries = async ({ search, currentPage }) => {
	const endPoint = search ? '/search/tv' : '/tv/popular/';

	const series = await fetchApi(endPoint, currentPage, search);

	if (series) {
		return series.results;
	}
	return [];
	// Action de error
};

export const fetchTrendingSeries = async () => {
	const trendingSeries = await fetchApi('/trending/tv/day');

	if (trendingSeries) {
		return trendingSeries.results;
	}
	return [];
	// Action de error
};

export const fetchTopRatedSeries = async () => {
	const topRatedSeries = await fetchApi('/tv/top_rated');

	if (topRatedSeries) {
		return topRatedSeries.results;
	}
	return [];
	// Action de error
};
