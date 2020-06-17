import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div id="Forecast-container">
        {props.time}
        <div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            className="forecastIcon"
            alt="sunrain"
          />
        </div>
        <div>
          <strong>
            <span>21°C</span>
          </strong>
        </div>
      </div>
    </div>
  );
}
