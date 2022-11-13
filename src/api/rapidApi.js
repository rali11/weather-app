const rapidEndPoint = 'https://weatherbit-v1-mashape.p.rapidapi.com/';
const headers = {
  'X-RapidAPI-Key': '6b934344eemsh553b59566aa3a68p1da75djsn004148fdb1fd',
  'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
};

const fetchCurrentWeather = async function(coordinates){
  const currenEndPoint = `${rapidEndPoint}current`;
  const response = await fetch(`${currenEndPoint}?lat=${coordinates.latitude}&lon=${coordinates.longitude}`,{headers});
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  return json;
};

const fetchForecast = async function(coordinates){
  const forecastEndpoint = `${rapidEndPoint}forecast/daily`;
  const response = await fetch(`${forecastEndpoint}?lat=${coordinates.latitude}&lon=${coordinates.longitude}`,{headers});
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  return json;
}

export default {
  async getForecast5Days(coordinates){
    const forecast = await fetchForecast(coordinates);
    return forecast.data.slice(1,6).map(day => {
      return {
        maxTemperature:day['app_max_temp'],
        minTemperature:day['app_min_temp'],
        date:new Date(`${day['datetime']}T00:00:00`),
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