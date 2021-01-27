const mongoose = require('mongoose');
const config = require('config');
const { collectData } = require('./src/cron/collectData');

const connectConfig = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}

async function dbConnect() {
	try {

		await mongoose.connect(config.get('dbUri'), connectConfig);
		await collectData();

		setTimeout(() => mongoose.connection.close(() => console.log('Close Connection')), 10000)
		
	} catch (error) {
		console.log('Connection error: ', error.message);
		process.exit(1);
	}

}

dbConnect();