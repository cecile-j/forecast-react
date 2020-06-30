import React, { useState } from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div>
        <div id="current-temperature">{props.celsius}° C</div>
        <div id="links">
          C |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div id="current-temperature">{Math.round(fahrenheit())}° F</div>
        <div id="links">
          <a href="/" onClick={showCelsius}>
            C{" "}
          </a>{" "}
          | F
        </div>
      </div>
    );
  }
}
