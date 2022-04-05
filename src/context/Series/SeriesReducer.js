export const SeriesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SERIES':
			return {
				...state,
				series: action.series
			};
		case 'SET_TRENDING_SERIES':
			return {
				...state,
				trendingSeries: action.trendingSeries
			};
		case 'SET_TOP_RATED_SERIES':
			return {
				...state,
				topRatedSeries: action.topRatedSeries
			};
		case 'SET_PAGE':
			return {
				...state,
				currentPage: action.currentPage
			};
		case 'SET_SEARCH':
			return {
				...state,
				search: action.search
			};
		default:
			return state;
	}
};
