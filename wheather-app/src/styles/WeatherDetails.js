import styled from 'styled-components';

export const WheatherDetailsCss = styled.div`
	display: flex;
	// margin: 20px 0;
`;

export const DetailsLeft = styled.div`
	width: 39.9%;

	img {
		width: 200px;
	}
	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;
		justify-content: center;

		img {
			width: 100%;
		}
	}
`;

export const DetailsRight = styled.div`
	width: 59.9%;
`;

export const TempCss = styled.div`
	display: flex;
	margin: 5px;
	margin-left: 15px;
	padding: 20px 0;
	font-size: 25px;

	img {
		margin: 0 5px;
		height: 35px;
	}
	@media (max-width: 500px) {
		font-size: 20px;

		img {
			height: 30px;
		}
	}
`;

export const OtherDetails = styled.div`
	margin: 5px;
	font-size: 20px;

	img {
		margin: 0 5px;
		width: 30px;
	}
	@media (max-width: 500px) {
		font-size: 18px;
	}
`;