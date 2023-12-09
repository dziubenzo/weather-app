import '../css/main.scss';

let location = 'Katowice';

async function getWeatherData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=b9aed0e0fc274fd7b8a152201230712&q=${location}&days=3&aqi=yes&alerts=yes`,
    { mode: 'cors' },
  );
  const data = await response.json();
  console.log(data);
}

getWeatherData(location);
