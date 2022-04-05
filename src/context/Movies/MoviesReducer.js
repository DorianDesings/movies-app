export const moviesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_MOVIES':
			return {
				...state,
				movies: action.movies
			};
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
