export function getData() {
	return fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=58.4037694&lon=15.5407345`)
		.then(res => res.json())
}
