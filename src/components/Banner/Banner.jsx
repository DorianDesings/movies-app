import { useEffect, useState } from 'react';
import { API_KEY } from '../../constants/api';
import { StyledBanner } from './banner.styles';

const Banner = () => {
	const [upcomingMovies, setUpcomingMovies] = useState([]);

	useEffect(() => {
		fetchUpcomingMovies(setUpcomingMovies);
	}, []);

	return (
		<StyledBanner>
			{upcomingMovies.length > 0 &&
				upcomingMovies.map(movie => {
					return (
						<div key={movie.id}>
							<h2>{movie.title}</h2>
							<p>{movie.overview}</p>
							<img
								src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
							/>
						</div>
					);
				})}
		</StyledBanner>
	);
};

const fetchUpcomingMovies = async setUpcomingMovies => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
	);

	const data = await response.json();

	setUpcomingMovies(data.results.slice(1, 6));
};

export default Banner;
