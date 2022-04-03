import styled from 'styled-components';

const StyledBanner = styled.div`
	display: flex;
	overflow-x: scroll;
	overflow-y: hidden;
	position: relative;

	div {
		position: relative;
		min-width: 100vw;
		height: 70vh;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100%;
			background-color: rgb(0 0 0 / 0.7);
			z-index: 1;
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			background-image: linear-gradient(transparent 40%, #111 70%);
			z-index: 1;
		}
	}

	h2,
	p {
		position: relative;
		top: 2rem;
		padding: 0 2rem;
		z-index: 10;
	}

	p {
		line-height: 1.6;
		font-size: 0.8rem;
	}

	img {
		position: absolute;
		top: 0;
		width: 100vw;
		z-index: -1;
	}
`;

export { StyledBanner };
