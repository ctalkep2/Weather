const { collectWeather } = require('../assets/collectWeather');

const Models = [];

async function collectData() {
	const { DailyWeatherModel } = await require('../models/DailyWeather');

	Models.push(DailyWeatherModel);
	
	await collectWeather(DailyWeatherModel);
};

module.exports = { collectData, Models }