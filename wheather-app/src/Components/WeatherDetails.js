import React from 'react';

import { wheatherTemplate } from '../templates/wheatherTemplate';

function WeatherDetails( { details } ) {

	let template;
	let noDate = (<div>No wheather today</div>)

	details === undefined ? template = noDate : template = wheatherTemplate(details)

  return template
}



export default WeatherDetails;