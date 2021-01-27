import React from 'react';
import { settings } from '../settings';

import { 
	WheatherDetailsCss, 
	DetailsLeft, 
	DetailsRight, 
	TempCss, 
	OtherDetails } from '../styles/WeatherDetails';

export function wheatherTemplate(details) {
	let imgUrl = settings.icons_url + 'weather/' + details.sky_main + '-' + details.sky_icon + '.png'

	return (
		<WheatherDetailsCss>
			<DetailsLeft>
				<img src={imgUrl} alt={details.sky_icon} />
			</DetailsLeft>
			<DetailsRight>
				<TempCss><img src={settings.icons_url + "Thermometer.png"} alt="thermometer" />Температура {details.temp}°C</TempCss>
				<OtherDetails><img src={settings.icons_url + "Humidity.png"} alt="humidity" />Влажность {details.humidity}</OtherDetails>
				<OtherDetails><img src={settings.icons_url + "Pressure.png"} alt="pressure" />Давление {details.pressure}</OtherDetails>
				<OtherDetails><img src={settings.icons_url + "Wind.png"} alt="wind" />Скорось ветра {details.wind_speed} km/h</OtherDetails>
			</DetailsRight>
		</WheatherDetailsCss>
	)
}