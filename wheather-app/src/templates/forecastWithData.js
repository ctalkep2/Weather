import React from 'react';
import { settings } from '../settings';

export function forecastWithData(forecastData = {}) {

	let template = [];	
	
	for (let weather in forecastData) {
		template.push(
			<div key={weather}>
				<div>{forecastData[weather].date}</div>
				<img					
					src={settings.icons_url + 'weather/' + forecastData[weather].sky_icon + '.png'} 
					alt={forecastData[weather].sky_icon} 
				/>
				<div>{forecastData[weather].temp_min}°C/{forecastData[weather].temp_max}°C</div>
			</div>
		)
		
	}

	return template;
}