const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CityCoordModel = require('./CityCoord');

module.exports = (async function() {
	let templateShema = {};

	await CityCoordModel.find({}, function(err, weatherData) {
		const parseData = JSON.parse(JSON.stringify(weatherData[0]));

		for (let city in parseData) {
			if (city !== '_id') {
				templateShema[city] = dailyShemaTemplate();
			}
		}
	});

	const shema = await new Schema(templateShema, {collection : 'DailyWeather'});
	const DailyWeatherModel = model('DailyWeather', shema);

	return { DailyWeatherModel };
})();

function dailyShemaTemplate() {
	
	return {
		city: String,
		daily: {
			humidity: Number,
		  pressure: Number,
		  temp: Number,
		  wind_speed: Number,
		  sky_main: String,
		  sky_icon: String,
		  region: String
		},
		forecast: {
			day_1: 
			{
				date: String,
			  temp_min: Number,
			  temp_max: Number,
			  sky_icon: String
			},
			day_2: 
			{
				date: String,
			  temp_min: Number,
			  temp_max: Number,
			  sky_icon: String
			},
			day_3: 
			{
				date: String,
			  temp_min: Number,
			  temp_max: Number,
			  sky_icon: String
			}
		}
	}

}