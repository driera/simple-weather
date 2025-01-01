export interface CurrentWeather {
  city: string;
  clouds: number;
  // date: string;
  // hour: string;
  humidity: number;
  pressure: number;
  state: string;
  stateDescription: string;
  stateIcon: string;
  sunrise: number;
  sunset: number;
  temperature: number;
  temperatureMax: number;
  temperatureMin: number;
  windAngle: number;
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
    icon: string;
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

export const dataToCurrentWeather = (
  data: CurrentWeatherRawData
): CurrentWeather => {
  return {
    pressure: data.main.pressure,
    temperature: data.main.temp,
    temperatureMin: data.main.temp_min,
    temperatureMax: data.main.temp_max,
    humidity: data.main.humidity,
    state: data.weather[0].main,
    stateDescription: data.weather[0].description,
    stateIcon: data.weather[0].icon,
    windSpeed: data.wind.speed,
    windAngle: data.wind.deg,
    clouds: data.clouds.all,
    // hour: `${moment().format('HH:mm')}h`,
    // date: `${moment().format(`dddd, DD MMM 'YY`)}`,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    city: data.name
  };
};

export default CurrentWeather;
