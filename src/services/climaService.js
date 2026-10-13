export const getWeather = async (lat = 21.122, lon = -101.683) => {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('error al obtener los datos del clima');
  }
  
  const data = await response.json();
  return data.current_weather;
};