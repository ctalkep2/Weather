import { createGlobalStyle  } from 'styled-components';
import { settings } from '../settings';

const fontPath = `${settings.fonts_url}OpenSans-Regular.ttf`;

const GlobalStyle = createGlobalStyle `
		body {
			margin: 0;
		}

		  @font-face {
     font-family: 'open-sans';
     src: url('${fontPath}');
  }
`

export default GlobalStyle;