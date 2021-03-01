import axios from "axios";

// const weatherKey = "163d20773114501769f1fa666333ecc9";
const weatherKey = process.env.WEATHERAPI_KEY;

export const getCurrentWeather = (city) => {
  return (
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=477162d1513448d1a48222502212802&q=${city}`
      )
      // .get(`https://api.weatherapi.com/v1/current.json`, {
      //   key: "477162d1513448d1a48222502212802",
      //   q: city
      // })
      .then((response) => {
        console.log("resp", response);
        const { current } = response.data;
        return current;
      })
      .catch((error) => {
        console.log(error);
      })
  );
};
