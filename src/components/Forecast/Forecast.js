/* eslint-disable no-undef */
import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';



const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
    // weather data fetch function will go here

    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q='seattle'&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "05d35adc46mshefbab11537c1e96p16de4ejsn65f10bf78281",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
    setResponseObj(response)
})
    }
    return (
             <div>
           <h2>Find Current Weather Conditions</h2>
           <button onClick={getForecast}>Get Forecast</button>
           <Conditions
               responseObj={responseObj}
               />
       </div>
    )
    }
    export default Forecast;