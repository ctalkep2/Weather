import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Components/Weather';

import GlobalStyle  from './styles/global'

ReactDOM.render(
  <React.StrictMode>
  	<GlobalStyle />
  	<Weather />
  </React.StrictMode>,
  document.getElementById('root')
);
