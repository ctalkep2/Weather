const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	const { Models } = require('../assets/collectData');

	const DailyWeatherModel = Models[0];

	DailyWeatherModel.find({}, function(err, weatherData) {
		res.set('Access-Control-Allow-Origin', '*');
		res.send(weatherData[0]);
	});

});

module.exports = router;