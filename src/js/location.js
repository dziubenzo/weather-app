export default class Location {
  constructor(location, current, today, tomorrow, twoDays) {
    this.location = location.name;
    this.country = location.country;
    this.localTime = new Date(location.localtime);
    this.current = {};
    this.current.celsius = {};
    this.current.fahrenheit = {};
    this.today = {}

    // Current data
    this.current.lastUpdated = new Date(current.last_updated);
    this.current.weatherDescription = current.condition.text;
    this.current.weatherCode = current.condition.code;
    this.current.humidity = current.humidity + '%';
    this.current.cloudCover = current.cloud + '%';
    this.current.uvIndex = current.uv;
    // More on that: https://uk-air.defra.gov.uk/air-pollution/daqi
    this.current.airQualityIndex =
      current.air_quality['gb-defra-index'];

    // Current Celsius data
    this.current.celsius.temperature = current.temp_c + ' °C';
    this.current.celsius.windSpeed = current.wind_kph + ' km/h';
    this.current.celsius.precipitation = current.precip_mm + ' mm';
    this.current.celsius.feelsLike = current.feelslike_c + ' °C';
    this.current.celsius.visibility = current.vis_km + ' km';

    // Current Fahrenheit data
    this.current.fahrenheit.temperature = current.temp_f + ' °F';
    this.current.fahrenheit.windSpeed = current.wind_mph + ' mph';
    this.current.fahrenheit.precipitation = current.precip_in + ' in';
    this.current.fahrenheit.feelsLike = current.feelslike_f + ' °F';
    this.current.fahrenheit.visibility = current.vis_miles + ' miles';

    // Forecast for today

  }
}
