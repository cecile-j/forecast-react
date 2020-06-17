import React from "react";
import "./Styles.css";
import Form from "./Form";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";
import Forecastrows from "./Forecastrows";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Form.css";
import "./App.css";
import "./CurrentCity.css";
import "./Forecast.css";

export default function App() {
  return (
    <div className="App">
      <div id="appsize">
        <Form />
        <CurrentCity />
        <Forecastrows />
      </div>
    </div>
  );
}
