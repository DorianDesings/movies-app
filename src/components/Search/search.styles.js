import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 75px;
`;
const StyledInput = styled.input`
	background-color: none;
	border: none;
	outline: none;
	border-radius: 2rem;
	height: 35px;
	width: 250px;
	color: azure;
	padding: 0 1rem;
	background-color: #333;
`;

export { StyledInput, StyledForm };
