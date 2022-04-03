import styled from 'styled-components';

const StyledMenu = styled.ul`
	list-style: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	background-color: #222;
	z-index: 100;

	.active {
		color: red;
	}
`;

export { StyledMenu };
