import { format, formatDistance } from 'date-fns';

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

// Show weather info in the Current tab (default tab)
export function showCurrentWeatherData(locationObject, unit) {
  const div = document.querySelector('.weather-info');
  const locationP = div.querySelector('p.location-and-country');
  const localTimeP = div.querySelector('p.local-time');
  const lastUpdatedP = div.querySelector('p.last-updated');
  const descriptionP = div.querySelector('p.description');
  const temperatureP = div.querySelector('p.temperature');
  const feelsLikeP = div.querySelector('p.feels-like');

  const currentData = locationObject.current;

  locationP.textContent = `${locationObject.location}, ${locationObject.country}`;
  localTimeP.textContent = `Local time: ${format(
    locationObject.localTime,
    'd MMM yyyy, kk:mm',
  )}`;
  lastUpdatedP.textContent = `Last updated: ${formatDistance(
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
