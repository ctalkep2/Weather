import styled from 'styled-components';

export const LocationCss = styled.div`
	margin: 0 auto;
	width: 200px;

	p {
		margin: 0;
		text-align: center;
	}

	@media (max-width: 500px) {
		height: 15vh;
  }
`;

export const DateCss = styled.p`
	font-size: 20px;
	@media (max-width: 500px) {
		// padding-top: 20px;
		font-size: 18px;
	}
`;

export const TimeCss = styled.p`
	font-size: 50px;
	@media (max-width: 500px) {
		font-size: 40px;
	}
`;