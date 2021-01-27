const request = require('request-promise');

async function requestData(uri) {

	let options = {
		uri: uri,
		headers: {
			'User-Agent': 'Request-Promise'
    },
		json: true
	}

	return await request(options);
	
}

module.exports = { requestData };