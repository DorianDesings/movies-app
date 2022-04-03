import styled from 'styled-components';

const StyledCarouselHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.5rem;
`;

const StyledCarousel = styled.div`
	display: flex;
	overflow: scroll;
	padding: 0.5rem 1.5rem;
	gap: 1rem;
`;

const StyledTitle = styled.h2`
	font-size: 1rem;
`;

const StyledViewMore = styled.button`
	padding: 0.3rem 1rem;
	background-color: transparent;
	border: 2px solid currentColor;
	border-radius: 1rem;
	outline: none;
	color: inherit;
`;

export { StyledCarouselHeader, StyledCarousel, StyledTitle, StyledViewMore };
