import '../css/main.scss';
import Location from './location';

let locationName = 'Katowice';

// Fetch weather data from Weather API
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b9aed0e0fc274fd7b8a152201230712&q=${location}&days=3&aqi=yes&alerts=yes`,
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
  const locationData = data.location
  const currentData = data.current
  const todayData = data.forecast.forecastday[0].day
  const tomorrowData = data.forecast.forecastday[1].day
  const twoDaysData = data.forecast.forecastday[2].day
  const location = new Location(locationData, currentData, todayData, tomorrowData, twoDaysData);
  console.log(location);
});
