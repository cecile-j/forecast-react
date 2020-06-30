import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div>
      {" "}
      <div className="CurrentCity">
        <div class="current-forecast">
          <h1 id="current-city">{props.data.city}</h1>
          <div id="time">
            <FormattedDate date={props.data.date} />
          </div>
          <img
            src={props.data.iconUrl}
            id="current-icon"
            width=""
            alt={props.data.description}
          />
          <div id="weather-description">{props.data.description}</div>
          <div id="weather-wind">Wind: {props.data.wind} mph</div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <hr />
        <div className="Forecast">
          <div id="Forecast-container">
            <div>
              <strong>
                <span>21°C</span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
