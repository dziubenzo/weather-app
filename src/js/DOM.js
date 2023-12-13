import { format, formatDistance } from 'date-fns';
import removeAccents from 'remove-accents';
import { getWeatherIcon, setBackgroundPattern } from './icons';
import { getWeatherData, changeUnitVariable, displayWebsite } from './main';
import humiditySrc from '../assets/weather-details-icons/humidity.svg';
import cloudCoverSrc from '../assets/weather-details-icons/cloud-cover.svg';
import windSpeedSrc from '../assets/weather-details-icons/wind-speed.svg';
import pressureSrc from '../assets/weather-details-icons/pressure.svg';
import precipitationSrc from '../assets/weather-details-icons/precipitation.svg';
import visibilitySrc from '../assets/weather-details-icons/visibility.svg';
import uvIndexSrc from '../assets/weather-details-icons/uv-index.svg';
import airQualityIndexSrc from '../assets/weather-details-icons/air-quality-index.svg';
import chanceOfRainSrc from '../assets/weather-details-icons/chance-of-rain.svg';
import chanceOfSnowSrc from '../assets/weather-details-icons/chance-of-snow.svg';
import sunriseSrc from '../assets/weather-details-icons/sunrise.svg';
import sunsetSrc from '../assets/weather-details-icons/sunset.svg';
import totalSnowSrc from '../assets/weather-details-icons/total-snow.svg';
import celsiusSrc from '../assets/celsius.svg';
import fahrenheitSrc from '../assets/fahrenheit.svg';
import submitScr from '../assets/submit.svg';

// Underline a tab if clicked
export function underlineTab() {
  const tabs = document.querySelectorAll('nav li');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Remove underline from the current tab
      document
        .querySelector('li[class*="selected"]')
        .classList.remove('selected');
      // Add underline to the current tab
      tab.classList.add('selected');
    });
  });
}

// Animate GitHub logo on hover
export function animateGitHubLogo() {
  const logo = document.querySelector(
    'a[href="http://www.github.com/dziubenzo"]',
  );
  logo.addEventListener('mouseenter', () => {
    logo.classList.add('fa-beat-fade');
  });
  logo.addEventListener('mouseout', () => {
    logo.classList.remove('fa-beat-fade');
  });
}

// Show icons for all tabs
export function showIcons(unit) {
  // Current tab
  document.querySelector('img[alt="Humidity Icon"]').src = humiditySrc;
  document.querySelector('img[alt="Cloud Cover Icon"]').src = cloudCoverSrc;
  document.querySelector('img[alt="Wind Speed Icon"]').src = windSpeedSrc;

  document.querySelector('img[alt="Pressure Icon"]').src = pressureSrc;
  document.querySelector('img[alt="Precipitation Icon"]').src =
    precipitationSrc;
  document.querySelector('img[alt="Visibility Icon"]').src = visibilitySrc;
  document.querySelector('.current-tab img[alt="UV Index Icon"]').src =
    uvIndexSrc;
  document.querySelector('.current-tab img[alt="Air Quality Index Icon"]').src =
    airQualityIndexSrc;

  // Forecast tabs
  document.querySelector('img[alt="Average Humidity Icon"]').src = humiditySrc;
  document.querySelector('img[alt="Maximum Wind Speed Icon"]').src =
    windSpeedSrc;
  document.querySelector('img[alt="Chance of Rain Icon"]').src =
    chanceOfRainSrc;
  document.querySelector('img[alt="Chance of Snow Icon"]').src =
    chanceOfSnowSrc;
  document.querySelector('img[alt="Total Precipitation Icon"]').src =
    precipitationSrc;
  document.querySelector('img[alt="Total Snow Icon"]').src = totalSnowSrc;
  document.querySelector('.forecast-tab img[alt="UV Index Icon"]').src =
    uvIndexSrc;
  document.querySelector(
    '.forecast-tab img[alt="Air Quality Index Icon"]',
  ).src = airQualityIndexSrc;
  document.querySelector('img[alt="Sunrise Icon"]').src = sunriseSrc;
  document.querySelector('img[alt="Sunset Icon"]').src = sunsetSrc;

  // Celsius/Fahrenheit icon
  const unitIcons = document.querySelectorAll('img[class="change-unit"]');
  unitIcons.forEach((icon) => {
    if (unit === 'Celsius') {
      icon.src = fahrenheitSrc;
      icon.alt = 'Fahrenheit Icon';
    } else {
      icon.src = celsiusSrc;
      icon.alt = 'Celsius Icon';
    }
  });
  // Submit icon
  document.querySelector('img[class="submit-icon"]').src = submitScr;
}

// Change units for weather data
export function changeUnits(locationObject, unit) {
  const unitIcons = document.querySelectorAll('img[class="change-unit"]');
  unitIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      // Change icons
      if (unit === 'Fahrenheit') {
        unit = 'Celsius';
        unitIcons.forEach((icon) => {
          icon.src = fahrenheitSrc;
          icon.alt = 'Fahrenheit Icon';
        });
      } else {
        unit = 'Fahrenheit';
        unitIcons.forEach((icon) => {
          icon.src = celsiusSrc;
          icon.alt = 'Celsius Icon';
        });
      }
      // Determine the currently selected tab to change units in
      const selectedTab = document.querySelector(
        'li[class*="selected"]',
      ).className;
      if (selectedTab.includes('current')) {
        showCurrentWeather(locationObject, unit);
        showCurrentWeatherDetails(locationObject, unit);
      } else if (selectedTab.includes('today')) {
        showForecastWeather(locationObject, 'today', unit);
        showForecastWeatherDetails(locationObject, 'today', unit);
      } else if (selectedTab.includes('tomorrow')) {
        showForecastWeather(locationObject, 'tomorrow', unit);
        showForecastWeatherDetails(locationObject, 'tomorrow', unit);
      } else {
        showForecastWeather(locationObject, 'twoDays', unit);
        showForecastWeatherDetails(locationObject, 'twoDays', unit);
      }
      // Change the unit variable in main.js
      changeUnitVariable(unit);
    });
  });
}

// Change tabs and data displayed
export function changeTab(locationObject, unit) {
  const currentTabBtn = document.querySelector('li[class*="current"]');
  const todayTabBtn = document.querySelector('li[class*="today"]');
  const tomorrowTabBtn = document.querySelector('li[class*="tomorrow"]');
  const twoDaysTabBtn = document.querySelector('li[class*="two-days"]');
  const forecastTabBtns = [todayTabBtn, tomorrowTabBtn, twoDaysTabBtn];
  const forecastDays = ['today', 'tomorrow', 'twoDays'];
  const currentTab = document.querySelector('.current-tab');
  const forecastTab = document.querySelector('.forecast-tab');

  currentTabBtn.addEventListener('click', () => {
    forecastTab.style.display = 'none';
    currentTab.style.display = 'grid';
    setBackgroundPattern(
      locationObject.current.weatherCode,
      locationObject.current.isDay,
    );
    showCurrentWeather(locationObject, unit);
    showCurrentWeatherDetails(locationObject, unit);
  });

  forecastTabBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentTab.style.display = 'none';
      forecastTab.style.display = 'grid';
      setBackgroundPattern(
        locationObject[`${forecastDays[index]}`].weatherCode,
      );
      showForecastWeather(locationObject, forecastDays[index], unit);
      showForecastWeatherDetails(locationObject, forecastDays[index], unit);
    });
  });
}

// Show main weather info in the Current tab
export function showCurrentWeather(locationObject, unit) {
  const div = document.querySelector('.current-tab > .weather-info');
  const locationP = div.querySelector('p.location');
  const localTimeP = div.querySelector('p.local-time');
  const descriptionP = div.querySelector('p.description');
  const weatherIconImg = div.querySelector('img');
  const temperatureP = div.querySelector('p.temperature');
  const feelsLikeP = div.querySelector('p.feels-like');
  const lastUpdatedP = div.querySelector('p.last-updated');

  const currentData = locationObject.current;
  const unitLowerCase = unit.toLowerCase();

  locationP.textContent = `${locationObject.location}, ${locationObject.country}`;
  localTimeP.textContent = `${format(
    locationObject.localTime,
    'd MMM yyyy, kk:mm',
  )}`;
  descriptionP.textContent = currentData.weatherDescription;
  weatherIconImg.src = getWeatherIcon(
    currentData.weatherCode,
    currentData.isDay,
  );
  weatherIconImg.alt = `${currentData.weatherDescription} Icon`;
  temperatureP.textContent = currentData[`${unitLowerCase}`].temperature;
  feelsLikeP.textContent = currentData[`${unitLowerCase}`].feelsLike;
  lastUpdatedP.textContent = `Updated ${formatDistance(
    currentData.lastUpdated,
    locationObject.localTime,
    {
      addSuffix: true,
    },
  )}`;
}

// Show weather info details in the Current tab
export function showCurrentWeatherDetails(locationObject, unit) {
  const div = document.querySelector('.current-tab > .weather-info-details');
  const humidityP = div.querySelector('p.humidity-value');
  const cloudCoverP = div.querySelector('p.cloud-cover-value');
  const uvIndexP = div.querySelector('p.uv-index-value');
  const airQualityIndexP = div.querySelector('p.air-quality-index-value');
  const windSpeedP = div.querySelector('p.wind-speed-value');
  const pressureP = div.querySelector('p.pressure-value');
  const precipitationP = div.querySelector('p.precipitation-value');
  const visibilityP = div.querySelector('p.visibility-value');

  const currentData = locationObject.current;
  const unitLowerCase = unit.toLowerCase();

  humidityP.textContent = currentData.humidity;
  cloudCoverP.textContent = currentData.cloudCover;
  uvIndexP.textContent = currentData.uvIndex;
  airQualityIndexP.textContent = currentData.airQualityIndex;
  windSpeedP.textContent = currentData[`${unitLowerCase}`].windSpeed;
  pressureP.textContent = currentData[`${unitLowerCase}`].pressure;
  precipitationP.textContent = currentData[`${unitLowerCase}`].precipitation;
  visibilityP.textContent = currentData[`${unitLowerCase}`].visibility;
}

// Show main weather info in forecast tabs
export function showForecastWeather(locationObject, day, unit) {
  const div = document.querySelector('.forecast-tab > .weather-info');
  const locationP = div.querySelector('p.location');
  const localTimeP = div.querySelector('p.local-time');
  const descriptionP = div.querySelector('p.description');
  const weatherIconImg = div.querySelector('img');
  const avgTemperatureP = div.querySelector('p.avg-temperature');
  const minTemperatureP = div.querySelector('p.min-temperature');
  const maxTemperatureP = div.querySelector('p.max-temperature');
  const lastUpdatedP = div.querySelector('p.last-updated');

  const currentData = locationObject.current;
  const forecastData = locationObject[`${day}`];
  const unitLowerCase = unit.toLowerCase();

  locationP.textContent = `${locationObject.location}, ${locationObject.country}`;
  localTimeP.textContent = `${format(forecastData.date, 'EEEE, d MMMM yyyy')}`;
  descriptionP.textContent = forecastData.weatherDescription;
  weatherIconImg.src = getWeatherIcon(forecastData.weatherCode);
  weatherIconImg.alt = `${currentData.weatherDescription} Icon`;
  avgTemperatureP.textContent =
    forecastData[`${unitLowerCase}`].averageTemperature;
  minTemperatureP.textContent =
    forecastData[`${unitLowerCase}`].minimumTemperature;
  maxTemperatureP.textContent =
    forecastData[`${unitLowerCase}`].maximumTemperature;
  lastUpdatedP.textContent = `Updated ${formatDistance(
    currentData.lastUpdated,
    locationObject.localTime,
    {
      addSuffix: true,
    },
  )}`;
}

// Show weather info details in forecast tabs
export function showForecastWeatherDetails(locationObject, day, unit) {
  const div = document.querySelector('.forecast-tab > .weather-info-details');
  const avgHumidityP = div.querySelector('p.avg-humidity-value');
  const maxWindSpeedP = div.querySelector('p.max-wind-speed-value');
  const chanceOfRainP = div.querySelector('p.chance-of-rain-value');
  const chanceOfSnowP = div.querySelector('p.chance-of-snow-value');
  const totalPrecipitationP = div.querySelector('p.total-precipitation-value');
  const totalSnowP = div.querySelector('p.total-snow-value');
  const uvIndexP = div.querySelector('p.uv-index-value');
  const airQualityIndexP = div.querySelector('p.air-quality-index-value');
  const sunriseP = div.querySelector('p.sunrise-value');
  const sunsetP = div.querySelector('p.sunset-value');

  const forecastData = locationObject[`${day}`];
  const unitLowerCase = unit.toLowerCase();

  avgHumidityP.textContent = forecastData.averageHumidity;
  maxWindSpeedP.textContent = forecastData[`${unitLowerCase}`].maximumWindSpeed;
  chanceOfRainP.textContent = forecastData.chanceOfRain;
  chanceOfSnowP.textContent = forecastData.chanceOfSnow;
  totalPrecipitationP.textContent =
    forecastData[`${unitLowerCase}`].totalPrecipitation;
  totalSnowP.textContent = forecastData.totalSnow;
  uvIndexP.textContent = forecastData.uvIndex;
  airQualityIndexP.textContent = forecastData.airQualityIndex;
  sunriseP.textContent = format(forecastData.sunrise, 'kk:mm');
  sunsetP.textContent = format(forecastData.sunset, 'kk:mm');
}

// Create p with error message and append it below the form
function showErrorMessage(errorMessage) {
  const p = document.createElement('p');
  const optionsDiv = document.querySelector('.current-tab .options');
  const unitIcon = document.querySelector(
    '.current-tab img[class="change-unit"]',
  );
  p.className = 'error-message';
  p.textContent = errorMessage;
  optionsDiv.insertBefore(p, unitIcon);
}

// Remove the error message from the DOM if there is any
function removeErrorMessage() {
  if (document.querySelector('.error-message')) {
    document.querySelector('.error-message').remove();
  }
}

// Change weather forecast location
export function changeLocation() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    // Prevent form submission
    event.preventDefault();
    const originalLocationName = form.elements['location'].value;
    // Get rid of accents because using those in the Polish language somehow changes the fetched country property to be in a language different than English
    const newLocationName = removeAccents(originalLocationName);
    console.log(newLocationName);
    getWeatherData(newLocationName)
      .then((data) => {
        // Remove previous error message if there is any
        removeErrorMessage();
        // Clear the input field
        form.elements['location'].value = '';
        // Display weather data for the new location
        displayWebsite(newLocationName, data);
      })
      .catch((error) => {
        // Remove previous error message if there is one
        removeErrorMessage();
        // Clear the input field
        form.elements['location'].value = '';
        // Manipulate error message and show it
        const slicedError = error.toString().slice(7);
        showErrorMessage(
          `Error for query '${originalLocationName}': ${slicedError}`,
        );
      });
  });
}
