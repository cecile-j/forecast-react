import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00 `;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}° C`;
  }

  return (
    <div className="WeatherForecastPreview col">
      {hours()}
      <br />
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt="icon"
      ></img>{" "}
      <br />
      {temperature()}
    </div>
  );
}
