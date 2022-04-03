import styled from 'styled-components';

const StyledDetails = styled.div`
	position: relative;
	background-image: ${({ bg }) => `url(${bg})`};
	background-size: 200%;
	background-repeat: no-repeat;
	min-height: 120vh;
	padding-top: 1px;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgb(0 0 0 / 0.8);
		background-image: linear-gradient(transparent 0, #111 50%);
	}

	& > * {
		position: relative;
		z-index: 1;
	}

	h1 {
		text-align: center;
	}

	ul {
		list-style: none;
		padding: 0;
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	li {
		display: flex;
		align-items: center;
		padding: 0 0.8rem;
		border: 1px solid currentColor;
		height: 25px;
		border-radius: 1rem;
		font-size: 0.8rem;
	}

	p {
		position: relative;
		bottom: -45vh;
		padding: 0 1rem;
	}

	img {
		position: absolute;
		top: 20vh;
		left: 1rem;
		max-width: 50%;
		border-radius: 1rem;
	}
`;

export { StyledDetails };
