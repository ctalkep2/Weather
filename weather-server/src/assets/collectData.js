const { collectWeather } = require('./collectWeather');

const Models = [];

async function collectData() {
	const { DailyWeatherModel } = await require('../models/DailyWeather');

	Models.push(DailyWeatherModel);

	// For localhost
	// Remove comment collect function for run local server
	// If running on host use cronScript for update weather
	
	// await collectWeather(DailyWeatherModel);
};

module.exports = { collectData, Models }