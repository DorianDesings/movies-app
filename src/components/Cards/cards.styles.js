import styled from 'styled-components';

const StyledCards = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(2, 1fr);
	padding: 0 1rem;
`;

const StyledFavourite = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	right: 0;
	top: 0;
	width: 50px;
	height: 50px;
	border-top-right-radius: 1rem;
	background-color: rgb(0 0 0 / 0.7);
	z-index: 1;

	&::after {
		content: ${({ isFavourite }) =>
			isFavourite
				? 'url(/assets/icons/heart-solid.svg)'
				: 'url(/assets/icons/heart-outline.svg)'};
		width: 30px;
		height: 30px;
	}
`;

export { StyledCards, StyledFavourite };
