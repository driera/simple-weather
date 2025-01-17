import { getWindDirection } from "../utils";
import {
  getWeatherStateIcon,
  WeatherStateIconCode,
  WeatherStateIconSymbol
} from "../components/icons/get-icon";

export interface FiveDaysForecast {
  city: string;
  list: Forecast[];
}

export interface Forecast {
  date: number;
  temperature: number;
  temperatureMin: number;
  temperatureMax: number;
  state: string;
  stateDescription: string;
  stateIcon: WeatherStateIconSymbol | null;
  windSpeed: number;
  windAngle: string;
}

export interface FiveDaysForecastRawData {
  cod: number;
  message: number;
  cnt: number;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
  list: {
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: WeatherStateIconCode;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
  }[];
}

export const fiveDaysForecastEntity = (
  data: FiveDaysForecastRawData
): FiveDaysForecast => {
  const city = data.city.name;
  const list = data.list.map((forecast) => ({
    date: forecast.dt,
    temperature: Math.round(forecast.main.temp),
    temperatureMin: Math.round(forecast.main.temp_min),
    temperatureMax: Math.round(forecast.main.temp_max),
    state: forecast.weather[0].main,
    stateDescription: forecast.weather[0].description,
    stateIcon: getWeatherStateIcon(forecast.weather[0].icon),
    windSpeed: forecast.wind.speed,
    windAngle: getWindDirection(forecast.wind.deg)
  }));

  return {
    city,
    list
  };
};
