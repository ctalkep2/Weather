export function makeWeatherToday(json, city) {

  let dailyWeather;

  if (json[city.id] !== undefined) {

    dailyWeather = json[city.id].daily;

    return {
      humidity: dailyWeather.humidity,
      pressure: dailyWeather.pressure,
      temp: dailyWeather.temp,
      wind_speed: dailyWeather.wind_speed,
      sky_main: dailyWeather.sky_main,
      sky_icon: dailyWeather.sky_icon
    };
  }
}

export function makeWeatherForecast(json, days, city) {
  let makeForecastDays = {};
  let currentForecast;
  
  if (json[city.id] !== undefined) {
    currentForecast = json[city.id].forecast;

    for (let i = 1; i <= days; i++) {
      makeForecastDays[i] = {
        date: currentForecast['day_'+i].date,
        temp_min: currentForecast['day_'+i].temp_min,
        temp_max: currentForecast['day_'+i].temp_max,
        sky_icon: currentForecast['day_'+i].sky_icon
      }
    }

  }  

  return makeForecastDays;
}

export function cityListCreate(json) {
  let allCitys = []

  for (let city in json) {
    if (city !== '_id') {
      allCitys.push(json[city].city);
    }
  }

  return allCitys;
}

export function cityListId(json) {
  let allId = []

  for (let city in json) {
    if (city !== '_id') {
      allId.push(city);
    }
  }

  return allId;
}
