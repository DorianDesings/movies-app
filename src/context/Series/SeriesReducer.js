export const SeriesReducer = (state, action) => {
	switch (action.type) {
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
		default:
			return state;
	}
};
