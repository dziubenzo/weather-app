import '../css/main.scss';
import Location from './location';
import {
  underlineTab,
  animateGitHubLogo,
  showCurrentWeather,
  showCurrentWeatherDetails,
  showIcons,
  listenForTabs,
  listenForUnitChange,
  listenForNewLocation,
  showAndHideLoadingScreen,
} from './DOM';
import { setBackgroundPattern } from './icons';

const DEFAULT_LOCATION = 'Wielun';
const DEFAULT_UNIT = 'Celsius';
// Three days is the default as it is what the free Weather API key provides
const FORECAST_LENGTH = 3;
let locationName;
let location;
let unit;

showAndHideLoadingScreen();
retrieveDataFromLocalStorage();
underlineTab();
animateGitHubLogo();
showIcons();
getWeatherData(locationName).then((data) => {
  displayWebsite(locationName, data);
  listenForTabs();
  listenForUnitChange();
  listenForNewLocation();
});

// Fetch weather data from Weather API
export async function getWeatherData(location) {
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
}

// Change the value of the unit variable and update localStorage
export function changeUnitVariable(newUnit) {
  unit = newUnit;
  localStorage.setItem('unit', unit);
}

// Get the unit variable
export function getUnitVariable() {
  return unit;
}

// Get the location object
export function getLocationObject() {
  return location;
}

// Update variables and display weather data for the new location
export function displayWebsite(newLocationName, fetchedData) {
  location = new Location(fetchedData);
  locationName = newLocationName;
  localStorage.setItem('location', location.location);
  setBackgroundPattern(location.current.weatherCode, location.current.isDay);
  showCurrentWeather(location, unit);
  showCurrentWeatherDetails(location, unit);
}

// Retrieve location and unit from localStorage
// Set default ones if they do not exist
function retrieveDataFromLocalStorage() {
  if (localStorage.getItem('location')) {
    locationName = localStorage.getItem('location');
  } else {
    locationName = DEFAULT_LOCATION;
    localStorage.setItem('location', locationName);
  }
  if (localStorage.getItem('unit')) {
    unit = localStorage.getItem('unit');
  } else {
    unit = DEFAULT_UNIT;
    localStorage.setItem('unit', unit);
  }
}
