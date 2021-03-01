import React, { useEffect, useRef, useState } from "react";
import { getCurrentWeather } from "../services/weather";

const WeatherCard = ({ capital }) => {
  // const currentWeather = useRef(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    console.log("capital", capital);
    getCurrentWeather(capital).then((weather) => {
      console.log(weather);
      setCurrentWeather(weather);
    });
  }, []);

  console.log("currentWeather", currentWeather);
  return (
    currentWeather && (
      <div>
        <h2>Weather in {capital}</h2>
        <p>
          <strong>temperature: </strong>
          {currentWeather.temp_c}
          <span> Celcius</span>
        </p>
        <img
          src={currentWeather.condition.icon}
          alt={currentWeather.condition.text}
        />
        <p>
          <strong>wind:</strong>
          {` ${currentWeather.wind_kph} km/h, direction ${currentWeather.wind_dir}`}
        </p>
      </div>
    )
  );
};

export default WeatherCard;
