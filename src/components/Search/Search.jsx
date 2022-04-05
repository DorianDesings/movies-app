import { StyledForm, StyledInput } from './search.styles';

const Search = ({ title, setValue, value }) => (
	<StyledForm>
		<label>Search {title}</label>
		<StyledInput value={value} onChange={e => setValue(e.target.value)} />
	</StyledForm>
);

export default Search;
