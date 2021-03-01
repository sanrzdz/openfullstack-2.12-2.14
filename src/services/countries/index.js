import axios from "axios";

export const getAllCountries = () => {
  return axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
    const { data } = response;
    return data;
  });
};
