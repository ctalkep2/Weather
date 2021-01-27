import { css } from 'styled-components';

import fontURL from './OpenSans/OpenSans-Regular.ttf'

const GlobalFont = css`
	@font-face {
		font-family: 'open-sans';
		src: url(${fontURL}) format('ttf');
		font-weight: normal;
	}
`

export default GlobalFont;