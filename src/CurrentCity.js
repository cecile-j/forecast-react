import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function CurrentCity(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  // const [city, setCity] = useState("");

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "a1787f7dbe6796804efc90336d986a6f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div id="appsize">
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter City..."
              id="chosen-city"
              autocomplete="off"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="button"></input>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return `Loading...`;
  }

  // function handleSubmit(event){

  // }
}
