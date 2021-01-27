import { forecastNoData } from '../templates/forecastNoData'
import { forecastWithData } from '../templates/forecastWithData'

export function forecastTemplate(forecastData) {
	let templateResult;
	
	forecastData['1'] !== undefined 
	? templateResult = forecastWithData(forecastData) 
	: templateResult = forecastNoData()

	return (templateResult);	
}