const config = require('config');

const unixToDay = require('./unixToDay');

const makeCurrentWeather = function(data) {

	const parseData = JSON.parse(JSON.stringify(data));
	const current = parseData.current;
	const currentSky = current.weather[0];

	return {
		humidity: current.humidity,
	  pressure: current.pressure,
	  temp: Math.round(current.temp),
	  wind_speed: current.wind_speed,
	  sky_main: currentSky.main,
	  sky_icon: currentSky.icon,
	  region: parseData.timezone
	};

}

const makeForecatWeather = function(data) {
	let makeForecastDays = {};

	const parseData = JSON.parse(JSON.stringify(data));

	for (let i = 1; i <= config.days; i++) {
    makeForecastDays['day_' + i] = {
    	date: unixToDay(parseData.daily[i].dt),
      temp_min: Math.round(parseData.daily[i].temp.min),
      temp_max: Math.round(parseData.daily[i].temp.max),
      sky_icon: parseData.daily[i].weather[0].icon
    } 
  }

  return makeForecastDays;
}

module.exports = { makeCurrentWeather, makeForecatWeather }