import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return ( 
    <div className="WeatherInfo">        
        <h1>{props.data.city}</h1>
            <div className="circle mt-3 mb-3">
                <div className="circle-content">
            <ul>
                <li className="text-capitalize">{props.data.description}</li>
                <li>                        
                    <WeatherIcon code={props.data.icon} size={64} color={"#e7eaf6"} />
                </li>
            </ul>
                    <div className="clearfix">
                        <WeatherTemperature fahrenheit={props.data.temperature} />
                        <FormatDate date={props.data.date} />
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