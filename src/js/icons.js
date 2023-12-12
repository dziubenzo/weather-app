import cloudy from '../assets/weather-icons/weather-cloudy.svg';
import fog from '../assets/weather-icons/weather-fog.svg';
import lightningRainy from '../assets/weather-icons/weather-lightning-rainy.svg';
import lightning from '../assets/weather-icons/weather-lightning.svg';
import nightPartlyCloudy from '../assets/weather-icons/weather-night-partly-cloudy.svg';
import nightClear from '../assets/weather-icons/weather-night.svg';
import partlyCloudy from '../assets/weather-icons/weather-partly-cloudy.svg';
import partlyLightning from '../assets/weather-icons/weather-partly-lightning.svg';
import partlyRainy from '../assets/weather-icons/weather-partly-rainy.svg';
import partlySnowyRainy from '../assets/weather-icons/weather-partly-snowy-rainy.svg';
import partlySnowy from '../assets/weather-icons/weather-partly-snowy.svg';
import pouring from '../assets/weather-icons/weather-pouring.svg';
import rainy from '../assets/weather-icons/weather-rainy.svg';
import snowyHeavy from '../assets/weather-icons/weather-snowy-heavy.svg';
import snowyRainy from '../assets/weather-icons/weather-snowy-rainy.svg';
import snowy from '../assets/weather-icons/weather-snowy.svg';
import sunny from '../assets/weather-icons/weather-sunny.svg';
import windy from '../assets/weather-icons/weather-windy.svg';

// Determine weather icon to be displayed based on weather code and whether it is day or night
export function getWeatherIcon(weatherCode, isDay) {
  // Associate every possible code with an icon
  const weatherCodes = {
    1000: 'sss',
  };
}
