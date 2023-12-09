export default class Location {
  constructor(
    location,
    current,
    today,
    todayAstro,
    todayDate,
    tomorrow,
    tomorrowAstro,
    tomorrowDate,
    twoDays,
    twoDaysAstro,
    twoDaysDate,
  ) {
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

    // Today forecast data
    this.today = {};
    this.today.weatherDescription = today.condition.text;
    this.today.weatherCode = today.condition.code;
    this.today.sunrise = new Date(`${todayDate} ${todayAstro.sunrise}`);
    this.today.sunset = new Date(`${todayDate} ${todayAstro.sunset}`);
    this.today.totalSnow = today.totalsnow_cm + ' cm';
    this.today.averageHumidity = today.avghumidity + '%';
    this.today.chanceOfRain = today.daily_chance_of_rain + '%';
    this.today.chanceOfSnow = today.daily_chance_of_snow + '%';
    this.today.uvIndex = today.uv;
    this.today.airQualityIndex = today.air_quality['gb-defra-index'];

    // Today forecast data - Celsius
    this.today.celsius = {};
    this.today.celsius.maximumTemperature = today.maxtemp_c + ' °C';
    this.today.celsius.minimumTemperature = today.mintemp_c + ' °C';
    this.today.celsius.averageTemperature = today.avgtemp_c + ' °C';
    this.today.celsius.maximumWindSpeed = today.maxwind_kph + ' km/h';
    this.today.celsius.totalPrecipitation = today.totalprecip_mm + ' mm';

    // Today forecast data - Fahrenheit
    this.today.fahrenheit = {};
    this.today.fahrenheit.maximumTemperature = today.maxtemp_f + ' °F';
    this.today.fahrenheit.minimumTemperature = today.mintemp_f + ' °F';
    this.today.fahrenheit.averageTemperature = today.avgtemp_f + ' °F';
    this.today.fahrenheit.maximumWindSpeed = today.maxwind_mph + ' mph';
    this.today.fahrenheit.totalPrecipitation = today.totalprecip_in + ' in';

    // Tomorrow forecast data
    this.tomorrow = {};
    this.tomorrow.weatherDescription = tomorrow.condition.text;
    this.tomorrow.weatherCode = tomorrow.condition.code;
    this.tomorrow.sunrise = new Date(
      `${tomorrowDate} ${tomorrowAstro.sunrise}`,
    );
    this.tomorrow.sunset = new Date(`${tomorrowDate} ${tomorrowAstro.sunset}`);
    this.tomorrow.totalSnow = tomorrow.totalsnow_cm + ' cm';
    this.tomorrow.averageHumidity = tomorrow.avghumidity + '%';
    this.tomorrow.chanceOfRain = tomorrow.daily_chance_of_rain + '%';
    this.tomorrow.chanceOfSnow = tomorrow.daily_chance_of_snow + '%';
    this.tomorrow.uvIndex = tomorrow.uv;
    this.tomorrow.airQualityIndex = tomorrow.air_quality['gb-defra-index'];

    // Tomorrow forecast data - Celsius
    this.tomorrow.celsius = {};
    this.tomorrow.celsius.maximumTemperature = tomorrow.maxtemp_c + ' °C';
    this.tomorrow.celsius.minimumTemperature = tomorrow.mintemp_c + ' °C';
    this.tomorrow.celsius.averageTemperature = tomorrow.avgtemp_c + ' °C';
    this.tomorrow.celsius.maximumWindSpeed = tomorrow.maxwind_kph + ' km/h';
    this.tomorrow.celsius.totalPrecipitation = tomorrow.totalprecip_mm + ' mm';

    // Tomorrow forecast data - Fahrenheit
    this.tomorrow.fahrenheit = {};
    this.tomorrow.fahrenheit.maximumTemperature = tomorrow.maxtemp_f + ' °F';
    this.tomorrow.fahrenheit.minimumTemperature = tomorrow.mintemp_f + ' °F';
    this.tomorrow.fahrenheit.averageTemperature = tomorrow.avgtemp_f + ' °F';
    this.tomorrow.fahrenheit.maximumWindSpeed = tomorrow.maxwind_mph + ' mph';
    this.tomorrow.fahrenheit.totalPrecipitation =
      tomorrow.totalprecip_in + ' in';

    // Two days forecast data
    this.twoDays = {};
    this.twoDays.weatherDescription = twoDays.condition.text;
    this.twoDays.weatherCode = twoDays.condition.code;
    this.twoDays.sunrise = new Date(`${twoDaysDate} ${twoDaysAstro.sunrise}`);
    this.twoDays.sunset = new Date(`${twoDaysDate} ${twoDaysAstro.sunset}`);
    this.twoDays.totalSnow = twoDays.totalsnow_cm + ' cm';
    this.twoDays.averageHumidity = twoDays.avghumidity + '%';
    this.twoDays.chanceOfRain = twoDays.daily_chance_of_rain + '%';
    this.twoDays.chanceOfSnow = twoDays.daily_chance_of_snow + '%';
    this.twoDays.uvIndex = twoDays.uv;
    this.twoDays.airQualityIndex = twoDays.air_quality['gb-defra-index'];

    // Two days forecast data - Celsius
    this.twoDays.celsius = {};
    this.twoDays.celsius.maximumTemperature = twoDays.maxtemp_c + ' °C';
    this.twoDays.celsius.minimumTemperature = twoDays.mintemp_c + ' °C';
    this.twoDays.celsius.averageTemperature = twoDays.avgtemp_c + ' °C';
    this.twoDays.celsius.maximumWindSpeed = twoDays.maxwind_kph + ' km/h';
    this.twoDays.celsius.totalPrecipitation = twoDays.totalprecip_mm + ' mm';

    // Two days forecast data - Fahrenheit
    this.twoDays.fahrenheit = {};
    this.twoDays.fahrenheit.maximumTemperature = twoDays.maxtemp_f + ' °F';
    this.twoDays.fahrenheit.minimumTemperature = twoDays.mintemp_f + ' °F';
    this.twoDays.fahrenheit.averageTemperature = twoDays.avgtemp_f + ' °F';
    this.twoDays.fahrenheit.maximumWindSpeed = twoDays.maxwind_mph + ' mph';
    this.twoDays.fahrenheit.totalPrecipitation = twoDays.totalprecip_in + ' in';
  }
}
