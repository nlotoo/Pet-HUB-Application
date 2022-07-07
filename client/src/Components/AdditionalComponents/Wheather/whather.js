const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '50ab0801e1mshc185f110dee483fp1f4be7jsn0c88f3ec53b4',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5&units=metric&lang=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));