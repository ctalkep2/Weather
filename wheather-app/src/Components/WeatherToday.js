import React from 'react';

import WeatherDetails from './WeatherDetails';

import { makeWeatherToday } from '../utils/weatherUtils'

import { WheatherTodayCss } from '../styles/Weather';

function WeatherToday( { weather, city } ) {

  return (
  	<WheatherTodayCss>
	  	<WeatherDetails
	  		details = {makeWeatherToday(weather, city)}
	  	/>
  	</WheatherTodayCss>
  );
}

export default WeatherToday;