import React from "react";
import Forecast from "./Forecast";

export default function ForecastRow() {
  return (
    <div className="row">
      <div className="col">
        <Forecast time="12:00" />
      </div>
      <div className="col">
        <Forecast time="15:00" />
      </div>
      <div className="col">
        <Forecast time="18:00" />
      </div>
      <div className="col">
        <Forecast time="21:00" />
      </div>
      <div className="col">
        <Forecast time="00:00" />
      </div>
    </div>
  );
}
