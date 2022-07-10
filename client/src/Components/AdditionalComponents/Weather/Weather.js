import { useEffect, useState } from "react";
import './weaterTool.css'

export const Waether = () => {

	let [data, setData] = useState();
	let [temperature, setTemperature] = useState('')

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '50ab0801e1mshc185f110dee483fp1f4be7jsn0c88f3ec53b4',
				'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
			}
		};

		fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Exeter&format=json&u=f', options)
			.then(response => response.json())
			.then(response => {
				setData(response)
				setTemperature(Math.ceil((response?.current_observation.condition.temperature - 32) * 5 / 9))
			})
			.catch(err => console.error(err));


	}, [])


	const weatherNow = () => {

		if (data) {

			return <div>{!temperature ? 'N/a' : + temperature +'°C'} </div>
		} else {
			return <div> {!temperature ? 'N/a' : + temperature +'°C'} + °C</div>
		}
	}

	return (<div className="weather-box-class">
		<h5>Exeter {data ? weatherNow() : <i className="fa-solid fa-sync fa-spin"></i>}</h5>



	</div>)

}