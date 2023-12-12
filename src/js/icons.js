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

// Associate every possible code with an icon
const weatherCodes = {
  1000: sunny,
  1003: partlyCloudy,
  1006: cloudy,
  1009: cloudy,
  1030: fog,
  1063: partlyRainy,
  1066: partlySnowy,
  1069: partlySnowyRainy,
  1072: partlySnowyRainy,
  1087: lightning,
  1114: snowyHeavy,
  1117: snowyHeavy,
  1135: fog,
  1147: fog,
  1150: partlyRainy,
  1153: rainy,
  1168: snowyRainy,
  1171: snowyRainy,
  1180: partlyRainy,
  1183: rainy,
  1186: pouring,
  1189: pouring,
  1192: pouring,
  1195: pouring,
  1198: snowyRainy,
  1201: snowyRainy,
  1204: snowyRainy,
  1207: snowyRainy,
  1210: partlySnowy,
  1213: snowy,
  1216: snowy,
  1219: snowy,
  1222: snowy,
  1225: snowy,
  1237: snowyRainy,
  1240: rainy,
  1243: pouring,
  1246: pouring,
  1249: snowyRainy,
  1252: snowyRainy,
  1255: snowy,
  1258: snowyHeavy,
  1261: partlySnowyRainy,
  1264: snowyRainy,
  1273: partlyLightning,
  1276: lightningRainy,
  1279: lightning,
  1282: lightning,
};

// Determine weather icon to be displayed based on weather code and whether it is day or night
export function getWeatherIcon(weatherCode, isDay = true) {
  // Handle two cases that use night icons
  if (!isDay && weatherCode === 1000) {
    return nightClear;
  }
  if (!isDay && weatherCode === 1003) {
    return nightPartlyCloudy;
  }
  // Return matching icon source
  return weatherCodes[weatherCode];
}
