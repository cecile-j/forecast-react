import React from "react";
import FormattedDate from "./FormattedDate";

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
          <div id="current-temperature">{props.data.temperature}° C</div>

          <div id="links">C | F</div>
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
