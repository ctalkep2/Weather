const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();

const { collectData } = require('./src/assets/collectData');

const path = require('path');

app.use(express.json({ extended: true }))

app.use('/api/city', require('./src/routes/city.routes'));
app.use('/api/dailyWeather', require('./src/routes/dailyWeather.routes'));

app.use('/', (req, res) => {
	res.status(200);
	res.sendFile(path.join(__dirname, './dist', 'index.html'))
});

const PORT = config.get('port') || 5000;

const connectConfig = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}

async function dbConnect() {
	try {
		await mongoose.connect(config.get('dbUri'), connectConfig);

		await collectData();
		
		app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
		
	} catch(error) {
		console.log('Connection error: ', error.message);
		process.exit(1);
	}
}

dbConnect();