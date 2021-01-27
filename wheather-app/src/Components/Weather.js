import React, { useState, useEffect } from 'react';

import { 
  cityListCreate,
  cityListId 
} from '../utils/weatherUtils'

import WeatherToday from './WeatherToday';
import Forecast from './Forecast';
import LocationDate from './LocationDate';
import LocationName from './LocationName';
import ChooseCity from './ChooseCity';

import { WheatherCss } from '../styles/Weather';

function Weather() {

  const [citys, setCitys] = useState([]);
  const [cityId, setCityId] = useState([]);
  const [toggle, setToggle] = useState({toggle: 'none'});
  const [currentCity, setCurrentCity] = useState({current: 'Минск', id: 'minsk'});

  const [allWeather, setAllWeather] = useState({})

  useEffect(() => {

    fetch("https://weatherapp-ctalkep.ru/api/city")
      .then(res => res.json())
      .then(json => {
        setCitys(cityListCreate(json));
        setCityId(cityListId(json));
      })
    
    fetch("https://weatherapp-ctalkep.ru/api/dailyWeather")
      .then(res => res.json())
      .then(json => {
        setAllWeather(json);
      })

  }, [])

  return (
  	<WheatherCss>
      <LocationDate />
      <LocationName
        region = {currentCity}
        getToggle = {toggle}
        toggleSet = {setToggle}        
      />
      <ChooseCity
        regions = {citys}
        regionsId = {cityId}
        toggle = {toggle}
        changeToggle = {setToggle}
        setCity = {setCurrentCity}
      />
      <WeatherToday
        weather = {allWeather}
        city = {currentCity}
      />
      <Forecast
        forecast = {allWeather}
        days = {3}
        city = {currentCity}
      />
    </WheatherCss>
  );
}

export default Weather;