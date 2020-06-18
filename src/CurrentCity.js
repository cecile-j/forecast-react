import React from "react";

export default function CurrentCity() {
  return (
    <div className="CurrentCity">
      <div class="current-forecast">
        <h1 id="current-city">San Francisco</h1>
        <div id="time">Sunday June 7, 14:00</div>
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          id="current-icon"
          width=""
          alt="weather-icon"
        />
        <div id="weather-description">Sun</div>
        <div id="weather-wind">Wind: 10mph</div>
        <div id="current-temperature">21° C</div>

        <div id="links">
          <a href="#" id="celsius" class="active">
            C{" "}
          </a>
          |
          <a href="#" id="fahrenheit">
            {" "}
            F
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}
