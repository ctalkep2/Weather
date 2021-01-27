export function formatDate(date) {
	let formDate;

	date < 10 ? formDate = '0' + date : formDate = date;

	return formDate; 
}