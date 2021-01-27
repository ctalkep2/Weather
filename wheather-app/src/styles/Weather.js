import styled from 'styled-components';

export const WheatherCss = styled.div`
	max-width: 500px;
	height: 600px;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  font-family: open-sans;
  @media (max-width: 500px) {
		position: inherit;
		margin: 0;
		height: auto;
  }
  @media (max-height: 500px){
		position: inherit;
		margin: 0 auto;
		height: auto;
		max-width: initial;
  }
`;

export const WheatherTodayCss = styled.div`
	@media (max-width: 500px) {
		height: 40vh;
  }
`