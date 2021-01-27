import React, { useState, useEffect } from 'react';

import { formatDate } from '../utils/LocationDateUtils';

import { LocationCss, DateCss, TimeCss } from '../styles/LocationDate';

function LocationDate () {

	const dateNow = new Date();

	const [time, setTime] = useState({
		year: dateNow.getFullYear(),
		mounth: formatDate(dateNow.getMonth() + 1),
		day: dateNow.getDate(),
		hour: formatDate(dateNow.getHours()),
		minute: formatDate(dateNow.getMinutes())
	});

	useEffect(() => {
		
		const reloadTime = setInterval(() => {
			setTime(
				{
					year: dateNow.getFullYear(),
					mounth: formatDate(dateNow.getMonth() + 1),
					day: formatDate(dateNow.getDate()),
					hour: formatDate(dateNow.getHours()),
					minute: formatDate(dateNow.getMinutes())
				}
			);
		}, 1000);

		return () => clearInterval(reloadTime);

	});

	return (
		<LocationCss>
			<DateCss>{time.year}/{time.mounth}/{time.day}</DateCss>
			<TimeCss>{time.hour} : {time.minute}</TimeCss>
		</LocationCss>
	);
}

export default LocationDate;