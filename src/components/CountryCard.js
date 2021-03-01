import React from "react";
import WeatherCard from "./WeatherCard";

const CountryCard = ({ country }) => {
  return (
    <>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((l) => (
          <li key={l.iso639_1}>{l.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={`flag of ${country.name}`} width="100" />
      <WeatherCard capital={country.capital} />
    </>
  );
};

export default CountryCard;
