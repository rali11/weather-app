const options = {
  headers:{
    'X-Api-Key':'TqKU0LvcooS4TxDQG8TNoA==gBi4ZGpBXYIGsFTg'
  }
};

export const getCityCoordinates = async cityName => {  
  const response = await fetch (`https://api.api-ninjas.com/v1/geocoding?city=${cityName}`, options);
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json();
  return json;
}