import styled from 'styled-components';

export const ForecastCss = styled.div`
	display: flex;
	height: 275px;
	color: #fff;

	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		div {
			margin: 20px auto;
		}

	}

	> div:nth-child(1) {
		width: 33.29%;
		background-color: #C12F20;
	}
	> div:nth-child(2) {
		width: 33.29%;
		background-color: #DF3626;
	}
	> div:nth-child(3) {
		width: 33.29%;
		background-color: #F55545;
	}

	img {
		width 70%;
	}

	@media (max-width: 500px) {
		height: 40vh;
		font-size: 14px;
	}
`;