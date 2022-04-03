import { useState } from 'react';
import { StyledForm, StyledInput } from './search.styles';

const Search = () => {
	const [search, setSearch] = useState('');
	return (
		<StyledForm onSubmit={e => e.preventDefault()}>
			<label htmlFor=''>Search Movie</label>
			<StyledInput value={search} onChange={e => setSearch(e.target.value)} />
		</StyledForm>
	);
};

export default Search;
