import React from "react";
import "./Styles.css";
// import Form from "./Form";
import CurrentCity from "./CurrentCity";
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
      <footer>
        This project was created by{" "}
        <a href="https://github.com/cecile-j/forecast-react" className="footer">
          Cecile J.
        </a>
      </footer>
    </div>
  );
}
