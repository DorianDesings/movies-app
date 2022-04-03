export const moviesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_TRENDING_MOVIES':
			return {
				...state,
				trendingMovies: action.trendingMovies
			};
		case 'SET_TOP_RATED_MOVIES':
			return {
				...state,
				topRatedMovies: action.topRatedMovies
			};
		default:
			return state;
	}
};
