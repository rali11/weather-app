const apiKey = "ba42e93021f041ab93ae854e32b2b23e";
const baseUrl= "https://api.weatherbit.io/v2.0/";

const fetchForecast = async function(latitude, longitude){
  const forecastEndpoint = `${baseUrl}forecast/daily?key=${apiKey}&lat=${latitude}&lon=${longitude}&days=6`;
  const response = await fetch(forecastEndpoint);
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  return json;
}

const fetchCurrentWeather = async function(latitude, longitude){
  const currentEndpoint = `${baseUrl}current?key=${apiKey}&lat=${latitude}&lon=${longitude}`;
  const response = await fetch(currentEndpoint);
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  return json;
}

export default {
  async getForecast5Days(latitude, longitude){
    const forecast = await fetchForecast(latitude, longitude);
    return forecast.data.filter((day, index) => index !== 0).map(day => {
      return {
        maxTemperature:day['app_max_temp'],
        minTemperature:day['app_min_temp'],
        date:new Date(day['datetime'])
      }
    });
  },

  async getCurrentWeather(latitude, longitude){
    const currentWeather = await fetchCurrentWeather(latitude,longitude);
    return {
      currentTemperature:currentWeather.data[0]['app_temp'],
      humidity:currentWeather.data[0]['rh'],
      airPressure:currentWeather.data[0]['pres'],
      visibility:currentWeather.data[0]['vis'],
      windDirection:currentWeather.data[0]['wind_cdir'],
      windDirectionDegrees:currentWeather.data[0]['wind_dir'],
      weatherDescription:currentWeather.data[0]['weather']['description'],
    }
  }
}