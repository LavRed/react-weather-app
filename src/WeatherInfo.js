import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return ( 
    <div className="WeatherInfo">        
        <h1>{props.data.city}</h1>
            <div className="circle mt-3">
                <div className="circle-content">
            <ul>
                <li>
                    <FormatDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
                    <div className="clearfix">
                        <WeatherIcon code={props.data.icon} />
                        <WeatherTemperature fahrenheit={props.data.temperature} />
                    </div>
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
            </div>
        </div>
    </div>
);
}