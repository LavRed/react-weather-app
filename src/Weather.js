import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
    
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            date: "Wednesday 04:00",
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
    }

    
    if (weatherData.ready) {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" 
                        placeholder="Enter a city..." 
                        className="form-control"
                        autoFocus="on" 
                        />
                    </div>
                    <div className="col-3">
                        <input type="submit" 
                        value="Search" 
                        className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img
                        src={weatherData.icon}
                        alt={weatherData.description}
                        />
                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="unit">°F</span>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 1%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
    } else {
        const apiKey = "593614a5b248941937e4876f3e192174";
        let city = "London";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        //axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}