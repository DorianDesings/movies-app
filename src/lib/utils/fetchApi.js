import { API_KEY, API_URL, API_VERSION } from '../../constants/api';

export const fetchApi = async (url, page = 1, query) => {
	try {
		const response = await fetch(
			`${API_URL}${API_VERSION}${url}?api_key=${API_KEY}&page=${page}&query=${
				query ?? ''
			}`
		);

		const parsedResponse = await response.json();

		if (parsedResponse) {
			return parsedResponse;
		} else {
			// Action de error
		}
	} catch (error) {}
};
