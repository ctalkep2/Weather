const upadateDailyWeather = function(model, weather, update) {

	model.updateOne({}, update, (err, data) => {
		if (err) console.log(err);		
	});

}

module.exports = { upadateDailyWeather }