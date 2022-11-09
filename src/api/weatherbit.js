const apiKey = "ba42e93021f041ab93ae854e32b2b23e";
const baseUrl= "https://api.weatherbit.io/v2.0/";

const fetchForecast = async function(coordinates){
  const forecastEndpoint = `${baseUrl}forecast/daily?key=${apiKey}&lat=${coordinates.latitude}&lon=${coordinates.longitude}&days=6`;
  const response = await fetch(forecastEndpoint);
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  return json;
}

const fetchCurrentWeather = async function(coordinates){
  const currentEndpoint = `${baseUrl}current?key=${apiKey}&lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
  const response = await fetch(currentEndpoint);
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  return json;
}

export default {
  async getForecast5Days(coordinates){
    const forecast = await fetchForecast(coordinates);
    return forecast.data.filter((day, index) => index !== 0).map(day => {
      return {
        maxTemperature:day['app_max_temp'],
        minTemperature:day['app_min_temp'],
        date:new Date(day['datetime'])
      }
    });
  },

  async getCurrentWeather(coordinates){
    const currentWeather = await fetchCurrentWeather(coordinates);
    return {
      currentTemperature:currentWeather.data[0]['app_temp'],
      humidity:currentWeather.data[0]['rh'],
      airPressure:currentWeather.data[0]['pres'],
      visibility:currentWeather.data[0]['vis'],
      windDirection:currentWeather.data[0]['wind_cdir'],
      windDirectionDegrees:currentWeather.data[0]['wind_dir'],
      windSpeed:currentWeather.data[0]['wind_spd'],
      weatherDescription:currentWeather.data[0]['weather']['description'],
      cityName:currentWeather.data[0]['city_name'],
    }
  }
}