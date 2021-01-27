import React from 'react';

import { makeWeatherForecast } from '../utils/weatherUtils'
import { forecastTemplate } from '../utils/forecastUtils';

import { ForecastCss } from '../styles/ForecastCss';


function Forecast( { forecast, days, city } ) {

  return (
  	<ForecastCss>
  		{forecastTemplate(makeWeatherForecast(forecast, days, city))}
  	</ForecastCss>
  	);
}



export default Forecast;