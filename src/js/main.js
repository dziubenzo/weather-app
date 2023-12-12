import '../css/main.scss';
import Location from './location';
import {
  underlineTab,
  animateGitHubLogo,
  showCurrentWeather,
  showCurrentWeatherDetails,
  showWeatherDetailsIcons,
  changeTab,
} from './DOM';

// Three days is the default as it is what the free Weather API key provides
const FORECAST_LENGTH = 3;
let locationName = 'Katowice';
let unit = 'celsius';

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

underlineTab();
animateGitHubLogo();
showWeatherDetailsIcons();
getWeatherData(locationName).then((data) => {
  const location = new Location(data);
  console.log(location);
  showCurrentWeather(location, unit);
  showCurrentWeatherDetails(location, unit);
  changeTab(location, unit);
});
