import React from "react";
import "./Styles.css";
// import Form from "./Form";
import CurrentCity from "./CurrentCity";
import Forecastrows from "./Forecastrows";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./CurrentCity.css";
import "./Forecast.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <div id="appsize">
          <CurrentCity defaultCity="Taipei" />
          {/* <Forecastrows /> */}
        </div>
      </div>
      <footer>This project is created by Cecile J.</footer>
    </div>
  );
}
