const { Router } = require('express');
const router = Router();

const CityCoordModel = require('../models/CityCoord');

router.get('/', (req, res) => {
	CityCoordModel.find({}, function(err, weatherData) {
		res.set('Access-Control-Allow-Origin', '*');
		res.send(weatherData[0]);
	});  
});

module.exports = router;