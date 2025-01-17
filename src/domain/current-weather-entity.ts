import {
  getWeatherStateIcon,
  WeatherStateIconCode,
  WeatherStateIconSymbol
} from "../components/icons/get-icon";
import { formatUnixToTime, getWindDirection } from "../utils";

export interface CurrentWeather {
  city: string;
  clouds: number;
  humidity: number;
  pressure: number;
  state: string;
  stateDescription: string;
  stateIcon: WeatherStateIconSymbol | null;
  sunrise: string;
  sunset: string;
  temperature: number;
  temperatureFealing: number;
  temperatureMax: number;
  temperatureMin: number;
  windAngle: string;
  windSpeed: number;
}

export interface CurrentWeatherRawData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: WeatherStateIconCode;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const currentWeatherEntity = (
  data: CurrentWeatherRawData
): CurrentWeather => {
  const mainConditions = data.main;
  const weatherConditions = data.weather[0];
  const cloudConditions = data.clouds;

  const sunData = formatSunData(data.sys.sunrise, data.sys.sunset);
  const windData = formatWindData(data.wind.speed, data.wind.deg);
  const tempData = formatTemperatureData(mainConditions);

  return {
    pressure: mainConditions.pressure,
    humidity: mainConditions.humidity,
    city: data.name,
    state: weatherConditions.main,
    stateDescription: weatherConditions.description,
    stateIcon: getWeatherStateIcon(weatherConditions.icon),
    clouds: cloudConditions.all,
    ...windData,
    ...sunData,
    ...tempData
  };
};

const formatTemperatureData = ({
  temp,
  feels_like,
  temp_min,
  temp_max
}: {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}) => {
  return {
    temperature: Math.round(temp),
    temperatureFealing: Math.round(feels_like),
    temperatureMin: Math.round(temp_min),
    temperatureMax: Math.round(temp_max)
  };
};

const formatWindData = (speed: number, deg: number) => {
  return {
    windSpeed: speed,
    windAngle: getWindDirection(deg)
  };
};

const formatSunData = (sunrise: number, sunset: number) => {
  return {
    sunrise: formatUnixToTime(sunrise),
    sunset: formatUnixToTime(sunset)
  };
};
