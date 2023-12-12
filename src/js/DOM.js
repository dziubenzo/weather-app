import { format, formatDistance } from 'date-fns';
import humiditySrc from '../assets/weather-details-icons/humidity.svg';
import cloudCoverSrc from '../assets/weather-details-icons/cloud-cover.svg';
import windSpeedSrc from '../assets/weather-details-icons/wind-speed.svg';
import pressureSrc from '../assets/weather-details-icons/pressure.svg';
import precipitationSrc from '../assets/weather-details-icons/precipitation.svg';
import visibilitySrc from '../assets/weather-details-icons/visibility.svg';
import uvIndexSrc from '../assets/weather-details-icons/uv-index.svg';
import airQualityIndexSrc from '../assets/weather-details-icons/air-quality-index.svg';

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

// Show weather details icons
export function showWeatherDetailsIcons() {
  document.querySelector('img[alt="Humidity Icon"]').src = humiditySrc;
  document.querySelector('img[alt="Cloud Cover Icon"]').src = cloudCoverSrc;
  document.querySelector('img[alt="Wind Speed Icon"]').src = windSpeedSrc;
  document.querySelector('img[alt="Pressure Icon"]').src = pressureSrc;
  document.querySelector('img[alt="Precipitation Icon"]').src = precipitationSrc;
  document.querySelector('img[alt="Visibility Icon"]').src = visibilitySrc;
  document.querySelector('img[alt="UV Index Icon"]').src = uvIndexSrc;
  document.querySelector('img[alt="Air Quality Index Icon"]').src = airQualityIndexSrc;
}

// Show weather info in the Current tab
export function showCurrentWeather(locationObject, unit) {
  const div = document.querySelector('.weather-info');
  const locationP = div.querySelector('p.location');
  const localTimeP = div.querySelector('p.local-time');
  const lastUpdatedP = div.querySelector('p.last-updated');
  const descriptionP = div.querySelector('p.description');
  const temperatureP = div.querySelector('p.temperature');
  const feelsLikeP = div.querySelector('p.feels-like');

  const currentData = locationObject.current;

  locationP.textContent = `${locationObject.location}, ${locationObject.country}`;
  localTimeP.textContent = `${format(
    locationObject.localTime,
    'd MMM yyyy, kk:mm',
  )}`;
  lastUpdatedP.textContent = `Updated ${formatDistance(
    currentData.lastUpdated,
    locationObject.localTime,
    {
      addSuffix: true,
    },
  )}`;
  descriptionP.textContent = currentData.weatherDescription;
  temperatureP.textContent = currentData[`${unit}`].temperature;
  feelsLikeP.textContent = currentData[`${unit}`].feelsLike;
}

// Show weather info details in the Current tab
export function showCurrentWeatherDetails(locationObject, unit) {
  const div = document.querySelector('.weather-info-details');
  const humidityP = div.querySelector('p.humidity-value');
  const cloudCoverP = div.querySelector('p.cloud-cover-value');
  const uvIndexP = div.querySelector('p.uv-index-value');
  const airQualityIndexP = div.querySelector('p.air-quality-index-value');
  const windSpeedP = div.querySelector('p.wind-speed-value');
  const pressureP = div.querySelector('p.pressure-value');
  const precipitationP = div.querySelector('p.precipitation-value');
  const visibilityP = div.querySelector('p.visibility-value');

  const currentData = locationObject.current;

  humidityP.textContent = currentData.humidity;
  cloudCoverP.textContent = currentData.cloudCover;
  uvIndexP.textContent = currentData.uvIndex;
  airQualityIndexP.textContent = currentData.airQualityIndex;
  windSpeedP.textContent = currentData[`${unit}`].windSpeed;
  pressureP.textContent = currentData[`${unit}`].pressure;
  precipitationP.textContent = currentData[`${unit}`].precipitation;
  visibilityP.textContent = currentData[`${unit}`].visibility;
}
