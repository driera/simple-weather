import { dataToCurrentWeather } from "../domain/CurrentWeather";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = import.meta.env.VITE_SIMPLE_WEATHER_REACT_API_KEY;
const lang = "es";
const units = "metric";

export const fetchCurrentWeatherData = async (cityId: string) => {
  try {
    const response = await fetch(
      `${baseUrl}?id=${cityId}&units=${units}&lang=${lang}&APPID=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return dataToCurrentWeather(await response.json());
  } catch (error) {
    console.log("Fetch error:", error);
    return null;
  }
};
