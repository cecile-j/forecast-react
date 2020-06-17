import React from "react";

export default function Form() {
  return (
    <div id="appsize">
      <div className="Form">
        <form id="form">
          <input
            type="search"
            placeholder="Enter City..."
            id="chosen-city"
            autocomplete="off"
          />
          <button type="submit" value="search">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
