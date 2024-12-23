import React, { useState, useRef } from "react";

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

  const [city, setCity] = useState(null);
  const [cityMap, setCityMap] = useState([]);
  const cityInput = useRef('')

  const onSearch = (selectedCityName) => {
    if (selectedCityName) {
      const seletedCity = mockWeatherData[selectedCityName]
      setCity(seletedCity)
    } else {
      console.log(cityInput.current.value)
      const selectedCity = mockWeatherData[cityInput.current.value]
      if (selectedCity) {
        setCity(selectedCity)
        console.log(cityMap.includes(cityInput.current.value))
        if (!cityMap.includes(cityInput.current.value)) {
          setCityMap((prevState) => {
            return [...prevState, cityInput.current.value]
          })
        }
      } else {
        setCity(null)
      }
    }
  }

  return (
    <div>
      <input type="text" id="citySearch" ref={cityInput} placeholder="Search for a city..." />
      <button id="searchButton" onClick={() => onSearch()}>Search</button>
      <div>{
        cityMap.map((ele) => <button style={{margin: '2px'}} id="searchButton" onClick={() => onSearch(ele)}>{ele}</button>)
      }</div>
      <div id="weatherData">
        {city ? <>
          <div>Temperature:{city.temperature} </div>
          <div>Humidity: {city.humidity}</div>
          <div>Wind Speed: {city.windSpeed}</div>
        </> : <div>City not found.</div>}
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
