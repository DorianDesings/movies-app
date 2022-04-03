import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../../../lib/utils/fetchApi';
import { StyledDetails } from './details.styles';

const Details = () => {
	const [details, setDetails] = useState(null);
	const { id, type } = useParams();
	useEffect(() => {
		fetchDetails(id, type).then(data => setDetails(data));
	}, []);
	return (
		details && (
			<StyledDetails
				bg={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
			>
				<h1>{details.title || details.name}</h1>
				<ul>
					{details.genres.map(genre => (
						<li key={genre.id}>{genre.name}</li>
					))}
				</ul>
				<p>{details.overview}</p>
				<img
					src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
					alt=''
				/>
			</StyledDetails>
		)
	);
};

const fetchDetails = async (id, type) => await fetchApi(`/${type}/${id}`);

export default Details;
