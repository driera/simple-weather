import { CurrentWeatherRawData } from "../../domain/current-weather-entity";

export const currentWeatherDataSample: CurrentWeatherRawData = {
  coord: {
    lon: -0.3774,
    lat: 39.4697
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "nubes dispersas",
      icon: "03n"
    }
  ],
  base: "stations",
  main: {
    temp: 12.58,
    feels_like: 12.03,
    temp_min: 11.41,
    temp_max: 13.25,
    pressure: 1030,
    humidity: 82,
    sea_level: 1030,
    grnd_level: 1028
  },
  visibility: 10000,
  wind: {
    speed: 1.34,
    deg: 45,
    gust: 3.13
  },
  clouds: {
    all: 40
  },
  dt: 1735665339,
  sys: {
    type: 2,
    id: 2036969,
    country: "ES",
    sunrise: 1735629698,
    sunset: 1735663641
  },
  timezone: 3600,
  id: 2509954,
  name: "Valencia",
  cod: 200
};
