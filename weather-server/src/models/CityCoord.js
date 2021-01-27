const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const shema = new Schema(
	{
    lat: Number,
    lon: Number
  },
	{ 
		collection : 'CityCoord'
	}
);

module.exports = model('CityCoord', shema);