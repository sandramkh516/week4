import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [message, setMessage] = useState(false);
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setMessage(true);
    setWeather({
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,

      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let api = "ca0db41e2e878c74a1dfc7ffece370d4";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (message === false) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="button" />{" "}
        </form>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="button" />{" "}
        </form>
        <ul>
          <li>City: {city}</li>
          <li>Temperature: {Math.round(weather.temp)}°Ϲ</li>
          <li>Humidity: {Math.round(weather.humidity)}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>
            <img src={weather.icon} alt="" />
          </li>
        </ul>
      </div>
    );
  }
}
