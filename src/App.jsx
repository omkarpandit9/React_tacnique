import React, { useState } from "react";

function WeatherDashboard() {
  // Mock weather data
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  return (
    <div>
      <input type="text" id="citySearch" placeholder="Search for a city..." />
      <button id="searchButton">Search</button>
      <div id="weatherData">
        <div>Temperature: </div>
        <div>Humidity: </div>
        <div>Wind Speed: </div>
        <div>City not found.</div>
      </div>
      <div id="previousSearches"></div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
