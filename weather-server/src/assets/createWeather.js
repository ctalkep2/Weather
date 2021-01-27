const { requestWeather } = require('./requestWeather');

async function createWeather(weatherData) {
	let allWeather = {};

	for (let city in weatherData) {
		if (city !== '_id') {
			allWeather[city] = await requestWeather(weatherData[city]);
		}

	}

	return allWeather;
}

module.exports = { createWeather }