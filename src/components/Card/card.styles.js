import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 40vw;
	align-items: center;

	img {
		border-radius: 1rem;
		display: block;
		width: 100%;
	}

	h3 {
		font-size: 1rem;
	}
`;

export { StyledCard };
