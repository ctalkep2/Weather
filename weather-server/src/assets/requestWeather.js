const { requestData } = require('./requestData');
const { makeCurrentWeather, makeForecatWeather } = require('./makeWeather');

async function requestWeather(dataCity) {
	
	let res = await requestData(`https://api.openweathermap.org/data/2.5/onecall?lat=${dataCity.lat}&lon=${dataCity.lon}&exclude=minutely,hourly&appid=ef663b81e30536d84bcc21a31416b2fc&units=metric`);

	return {
		city: dataCity.city,
		daily: makeCurrentWeather(res),
		forecast: makeForecatWeather(res)
	}

}

module.exports = { requestWeather }