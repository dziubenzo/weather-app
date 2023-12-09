import '../css/main.scss';

let location = 'Katowice';

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
    console.log("Error: " + error.message);
  }
}

getWeatherData(location).then(data => {
  console.log(data);
});
