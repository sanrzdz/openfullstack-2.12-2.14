import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { getAllCountries } from "./services/countries";
import CountryCard from "./components/CountryCard";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const searchInput = useRef();

  useEffect(() => {
    getAllCountries().then((countries) => {
      setCountries(countries);
    });
  }, []);

  const handleChange = (e) => {
    const filteredCountries = countries.filter(
      (c) => c.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );

    setFilteredCountries(
      filteredCountries.length === countries.length ? [] : filteredCountries
    );

    if (filteredCountries.length === 1) {
      console.log("filteredCountries", filteredCountries);
      setSelectedCountry(filteredCountries[0]);
    } else {
      setSelectedCountry(null);
    }
  };

  const onClickCountry = (country) => {
    setSelectedCountry(country);
    setFilteredCountries([]);
    searchInput.current.value = "";
  };

  return (
    <div>
      <form>
        <label htmlFor="SearchCountry">find countries</label>
        <input
          type="text"
          id="SearchCountry"
          onChange={handleChange}
          ref={searchInput}
        />
      </form>
      <div>
        {filteredCountries.length > 10 && <span>too many countries</span>}
        {filteredCountries.length < 11 &&
          filteredCountries.length > 1 &&
          filteredCountries.map((country) => (
            <div key={country.alpha3Code}>
              <span>{country.name}</span>
              <button onClick={() => onClickCountry(country)}>show</button>
            </div>
          ))}
      </div>
      {selectedCountry && <CountryCard country={selectedCountry} />}
    </div>
  );
};

export default App;

/**
 * x- service to getCountries, getCountry
 * x- form to search for countries
 * - list of results
 * - result item
 * - card of country details
 *
 * - matches < 10 resultados  => listar results
 * - matches > 10 resultados  => mostrar mensaje "too many matches"
 * - matches == 1             => mostrar Country Card
 */
