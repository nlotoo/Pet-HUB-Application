import { useEffect, useState } from "react";


export const Waether = () => {

	let [data, setData] = useState();

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '50ab0801e1mshc185f110dee483fp1f4be7jsn0c88f3ec53b4',
				'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
			}
		};

		fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Kailua-Kona&format=json&u=f', options)
			.then(response => response.json())
			.then(response => {
				setData(response)
			})
			.catch(err => console.error(err));


	}, [])

	const weatherNow = () => {

		if (data?.current_observation.condition.text.toLowerCase().includes('cloudy')) {
			return <i className="fa-solid fa-cloud"></i>
		} else {
			return <i className="fa-solid fa-sun"></i>
		}
	}





	console.log(data?.current_observation.condition.text.toLowerCase().includes('cloudy'))

	return (<div>
		<h1>
			{data?.current_observation.condition ? weatherNow() : 'Loading...'}
			Waether
		</h1>

	</div>)

}