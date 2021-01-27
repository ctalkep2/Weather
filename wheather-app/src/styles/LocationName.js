import styled from 'styled-components';

export const RegionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 200px;
	cursor: pointer;

	img {
		margin: 0 3px;
		width: 20px;
		height: 20px;
	}
	@media (max-width: 500px) {
		height: 5vh;
	}
`;

export const Region = styled.p`
	margin: 0;
	font-size: 18px;
	text-align: center
	@media (max-width: 500px) {
		font-size: 16px;
	}
`;

export const Regions = styled.div`
	display: ${props => props.theme.toggle};
	flex-direction: column;
	align-items: center;
	position: absolute;
	width 100%;
	border: 1px solid #333;
	background-color: #fff;
	overflow: auto;
	cursor: pointer;
`