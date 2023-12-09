import '../css/main.scss';
import Location from './location';

// Three days is the default as it is what the free Weather API key provides
const FORECAST_LENGTH = 3;
let locationName = 'Katowice';

// Fetch weather data from Weather API
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b9aed0e0fc274fd7b8a152201230712&q=${location}&days=${FORECAST_LENGTH}&aqi=yes`,
      { mode: 'cors' },
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const error = await response.json();
      throw new Error(error.error.message);
    }
  } catch (error) {
    console.log('Error: ' + error.message);
  }
}

getWeatherData(locationName).then((data) => {
  const locationData = data.location;
  const currentData = data.current;
  const todayData = data.forecast.forecastday[0].day;
  const todayAstroData = data.forecast.forecastday[0].astro;
  const todayDate = data.forecast.forecastday[0].date;
  const tomorrowData = data.forecast.forecastday[1].day;
  const tomorrowAstroData = data.forecast.forecastday[1].astro;
  const tomorrowDate = data.forecast.forecastday[1].date;
  const twoDaysData = data.forecast.forecastday[2].day;
  const twoDaysAstroData = data.forecast.forecastday[2].astro;
  const twoDaysDate = data.forecast.forecastday[2].date;
  const location = new Location(
    locationData,
    currentData,
    todayData,
    todayAstroData,
    todayDate,
    tomorrowData,
    tomorrowAstroData,
    tomorrowDate,
    twoDaysData,
    twoDaysAstroData,
    twoDaysDate,
  );
  console.log(location);
});
