import '../css/main.scss';
import Location from './location';
import {
  underlineTab,
  animateGitHubLogo,
  showCurrentWeather,
  showCurrentWeatherDetails,
  showIcons,
  changeTab,
  changeUnits,
  changeLocation,
} from './DOM';
import { setBackgroundPattern } from './icons';

// Three days is the default as it is what the free Weather API key provides
const FORECAST_LENGTH = 3;
let locationName = 'Katowice';
let location;
let unit = 'Celsius';

// Fetch weather data from Weather API
export async function getWeatherData(location) {
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

// Change the value of the unit variable
export function changeUnitVariable(newUnit) {
  unit = newUnit;
  // Make sure unit change is applied to all tabs
  changeTab(location, unit);
}

// Update variables and display weather data for the new location
export function displayWebsite(newLocationName, fetchedData) {
  location = new Location(fetchedData);
  locationName = newLocationName;
  setBackgroundPattern(location.current.weatherCode, location.current.isDay);
  showCurrentWeather(location, unit);
  showCurrentWeatherDetails(location, unit);
  changeTab(location, unit);
  changeUnits(location, unit);
  changeLocation();
}

underlineTab();
animateGitHubLogo();
showIcons(unit);
getWeatherData(locationName).then((data) => {
  displayWebsite(locationName, data);
});
