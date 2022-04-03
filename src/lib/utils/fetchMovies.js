export const fetchMovies = async url => {
	console.log('FETCH');
	try {
		const response = await fetch(
			`${API_URL}${API_VERSION}/trending/movie/day${API_KEY}`
		);
		console.log('HOLA');

		const parsedResponse = response.json();

		if (parsedResponse) return parsedResponse;
		else {
			// Action de error
		}
	} catch (error) {}
};
