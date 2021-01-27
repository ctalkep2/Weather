const CityCoordModel = require('../models/CityCoord');
const { createWeather } = require('./createWeather');
const { upadateDailyWeather } = require('../db/updateDB');

async function collectWeather(model) {
	let allWeather = {};

	await CityCoordModel.find({}, async function(err, weatherData) {
		const parseData = JSON.parse(JSON.stringify(weatherData[0]));

		allWeather = await createWeather(parseData);

		await saveData(allWeather, model);
	});

}

async function saveData(json, DailyWeatherModel) {

	const DailyWeather = new DailyWeatherModel(json);

  DailyWeatherModel.find({}, function(err, weatherData) {

  	if (weatherData.length !== 0) {
  		const parseData = JSON.parse(JSON.stringify(weatherData[0]));

  		let weather = {};
  	
	  	for (let city in parseData) {
	  		if (city !== '_id' && city !== '__v') {
	  			weather[city] = parseData[city];
	  		}
	  	}
	  	
	  	upadateDailyWeather(DailyWeatherModel, weather, json);

  	} else {
  		DailyWeather.save();  		
  	}

	});
	
	console.log('Weather is updated');
}

module.exports = { collectWeather }