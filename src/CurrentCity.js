import React, { useState } from "react";
import axios from "axios";

export default function CurrentCity(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  // const [city, setCity] = useState("");

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      date: "Wednesday 07:00",
    });
  }

  if (weatherData.loaded) {
    return (
      <div>
        <div id="appsize">
          <div className="Form">
            <form type="submit">
              <input
                type="search"
                placeholder="Enter City..."
                id="chosen-city"
                autocomplete="off"
              />
              <input type="submit" value="Search"></input>
            </form>
          </div>
        </div>
        <div className="CurrentCity">
          <div class="current-forecast">
            <h1 id="current-city">{weatherData.city}</h1>
            <div id="time">{weatherData.date}</div>
            <img
              src={weatherData.iconUrl}
              id="current-icon"
              width=""
              alt={weatherData.description}
            />
            <div id="weather-description">{weatherData.description}</div>
            <div id="weather-wind">Wind: {weatherData.wind} mph</div>
            <div id="current-temperature">{weatherData.temperature}° C</div>

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
  } else {
    const apiKey = "a1787f7dbe6796804efc90336d986a6f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }

  // function handleSubmit(event){

  // }
}
