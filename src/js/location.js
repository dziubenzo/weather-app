export default class Location {
  constructor(data) {
    // Divide API data into relevant chunks
    const location = data.location;
    const current = data.current;
    const today = data.forecast.forecastday[0].day;
    const todayAstro = data.forecast.forecastday[0].astro;
    const todayDate = data.forecast.forecastday[0].date;
    const tomorrow = data.forecast.forecastday[1].day;
    const tomorrowAstro = data.forecast.forecastday[1].astro;
    const tomorrowDate = data.forecast.forecastday[1].date;
    const twoDays = data.forecast.forecastday[2].day;
    const twoDaysAstro = data.forecast.forecastday[2].astro;
    const twoDaysDate = data.forecast.forecastday[2].date;

    const dayDataArray = [today, tomorrow, twoDays];
    const astroDataArray = [todayAstro, tomorrowAstro, twoDaysAstro];
    const dateDataArray = [todayDate, tomorrowDate, twoDaysDate];
    const daysArray = ['today', 'tomorrow', 'twoDays'];

    this.location = location.name;
    this.country = location.country;
    this.localTime = new Date(location.localtime);

    // Current data
    this.current = {};
    this.current.lastUpdated = new Date(current.last_updated);
    this.current.weatherDescription = current.condition.text;
    this.current.weatherCode = current.condition.code;
    this.current.humidity = current.humidity + '%';
    this.current.cloudCover = current.cloud + '%';
    this.current.uvIndex = current.uv;
    // More on that: https://uk-air.defra.gov.uk/air-pollution/daqi
    this.current.airQualityIndex = current.air_quality['gb-defra-index'];

    // Current Celsius data
    this.current.celsius = {};
    this.current.celsius.temperature = current.temp_c + ' °C';
    this.current.celsius.windSpeed = current.wind_kph + ' km/h';
    this.current.celsius.precipitation = current.precip_mm + ' mm';
    this.current.celsius.feelsLike = current.feelslike_c + ' °C';
    this.current.celsius.visibility = current.vis_km + ' km';

    // Current Fahrenheit data
    this.current.fahrenheit = {};
    this.current.fahrenheit.temperature = current.temp_f + ' °F';
    this.current.fahrenheit.windSpeed = current.wind_mph + ' mph';
    this.current.fahrenheit.precipitation = current.precip_in + ' in';
    this.current.fahrenheit.feelsLike = current.feelslike_f + ' °F';
    this.current.fahrenheit.visibility = current.vis_miles + ' miles';

    // Fill an instance with forecast data dynamically for all days
    for (let index = 0; index < dayDataArray.length; index++) {
      // Forecast data
      this[`${daysArray[index]}`] = {};
      this[`${daysArray[index]}`].weatherDescription =
        dayDataArray[index].condition.text;
      this[`${daysArray[index]}`].weatherCode =
        dayDataArray[index].condition.code;
      this[`${daysArray[index]}`].sunrise = new Date(
        `${dateDataArray[index]} ${astroDataArray[index].sunrise}`,
      );
      this[`${daysArray[index]}`].sunset = new Date(
        `${dateDataArray[index]} ${astroDataArray[index].sunset}`,
      );
      this[`${daysArray[index]}`].totalSnow =
        dayDataArray[index].totalsnow_cm + ' cm';
      this[`${daysArray[index]}`].averageHumidity =
        dayDataArray[index].avghumidity + '%';
      this[`${daysArray[index]}`].chanceOfRain =
        dayDataArray[index].daily_chance_of_rain + '%';
      this[`${daysArray[index]}`].chanceOfSnow =
        dayDataArray[index].daily_chance_of_snow + '%';
      this[`${daysArray[index]}`].uvIndex = dayDataArray[index].uv;
      this[`${daysArray[index]}`].airQualityIndex =
        dayDataArray[index].air_quality['gb-defra-index'];

      // Forecast data - Celsius
      this[`${daysArray[index]}`].celsius = {};
      this[`${daysArray[index]}`].celsius.maximumTemperature =
        dayDataArray[index].maxtemp_c + ' °C';
      this[`${daysArray[index]}`].celsius.minimumTemperature =
        dayDataArray[index].mintemp_c + ' °C';
      this[`${daysArray[index]}`].celsius.averageTemperature =
        dayDataArray[index].avgtemp_c + ' °C';
      this[`${daysArray[index]}`].celsius.maximumWindSpeed =
        dayDataArray[index].maxwind_kph + ' km/h';
      this[`${daysArray[index]}`].celsius.totalPrecipitation =
        dayDataArray[index].totalprecip_mm + ' mm';

      // Forecast data - Fahrenheit
      this[`${daysArray[index]}`].fahrenheit = {};
      this[`${daysArray[index]}`].fahrenheit.maximumTemperature =
        dayDataArray[index].maxtemp_f + ' °F';
      this[`${daysArray[index]}`].fahrenheit.minimumTemperature =
        dayDataArray[index].mintemp_f + ' °F';
      this[`${daysArray[index]}`].fahrenheit.averageTemperature =
        dayDataArray[index].avgtemp_f + ' °F';
      this[`${daysArray[index]}`].fahrenheit.maximumWindSpeed =
        dayDataArray[index].maxwind_mph + ' mph';
      this[`${daysArray[index]}`].fahrenheit.totalPrecipitation =
        dayDataArray[index].totalprecip_in + ' in';
    }
  }
}
