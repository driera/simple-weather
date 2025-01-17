import { CurrentWeatherRawData } from "../../domain/current-weather-entity";
import { FiveDaysForecastRawData } from "../../domain/five-days-forecast-entity";

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

export const fiveDaysForecastDataSample: FiveDaysForecastRawData = {
  cod: 200,
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1737147600,
      main: {
        temp: 10.69,
        feels_like: 9.56,
        temp_min: 9.67,
        temp_max: 10.69,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1029,
        humidity: 67,
        temp_kf: 1.02
      },
      weather: [
        { id: 803, main: "Clouds", description: "muy nuboso", icon: "04n" }
      ],
      clouds: { all: 82 },
      wind: { speed: 4.56, deg: 347, gust: 6.52 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-17 21:00:00"
    },
    {
      dt: 1737158400,
      main: {
        temp: 9.67,
        feels_like: 7.85,
        temp_min: 8.9,
        temp_max: 9.67,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1028,
        humidity: 68,
        temp_kf: 0.77
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 88 },
      wind: { speed: 3.49, deg: 311, gust: 3.75 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-18 00:00:00"
    },
    {
      dt: 1737169200,
      main: {
        temp: 7.88,
        feels_like: 5.07,
        temp_min: 7.88,
        temp_max: 7.88,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1026,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "muy nuboso", icon: "04n" }
      ],
      clouds: { all: 72 },
      wind: { speed: 4.69, deg: 302, gust: 5.91 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-18 03:00:00"
    },
    {
      dt: 1737180000,
      main: {
        temp: 7.33,
        feels_like: 4.62,
        temp_min: 7.33,
        temp_max: 7.33,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1025,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "muy nuboso", icon: "04n" }
      ],
      clouds: { all: 68 },
      wind: { speed: 4.21, deg: 291, gust: 5.33 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-18 06:00:00"
    },
    {
      dt: 1737190800,
      main: {
        temp: 8.83,
        feels_like: 7.65,
        temp_min: 8.83,
        temp_max: 8.83,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1026,
        humidity: 58,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "muy nuboso", icon: "04d" }
      ],
      clouds: { all: 82 },
      wind: { speed: 2.22, deg: 298, gust: 2.81 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-18 09:00:00"
    },
    {
      dt: 1737201600,
      main: {
        temp: 12.25,
        feels_like: 10.71,
        temp_min: 12.25,
        temp_max: 12.25,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1026,
        humidity: 45,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "muy nuboso", icon: "04d" }
      ],
      clouds: { all: 64 },
      wind: { speed: 0.91, deg: 41, gust: 1.19 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-18 12:00:00"
    },
    {
      dt: 1737212400,
      main: {
        temp: 12.03,
        feels_like: 10.65,
        temp_min: 12.03,
        temp_max: 12.03,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1024,
        humidity: 52,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 100 },
      wind: { speed: 2.33, deg: 96, gust: 2.29 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-18 15:00:00"
    },
    {
      dt: 1737223200,
      main: {
        temp: 10.03,
        feels_like: 8.63,
        temp_min: 10.03,
        temp_max: 10.03,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1024,
        humidity: 59,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 97 },
      wind: { speed: 0.94, deg: 211, gust: 1.03 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-18 18:00:00"
    },
    {
      dt: 1737234000,
      main: {
        temp: 8.57,
        feels_like: 7.73,
        temp_min: 8.57,
        temp_max: 8.57,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1024,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "muy nuboso", icon: "04n" }
      ],
      clouds: { all: 84 },
      wind: { speed: 1.78, deg: 279, gust: 1.88 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-18 21:00:00"
    },
    {
      dt: 1737244800,
      main: {
        temp: 8.1,
        feels_like: 6.52,
        temp_min: 8.1,
        temp_max: 8.1,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1023,
        humidity: 64,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "muy nuboso", icon: "04n" }
      ],
      clouds: { all: 77 },
      wind: { speed: 2.57, deg: 281, gust: 2.61 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-19 00:00:00"
    },
    {
      dt: 1737255600,
      main: {
        temp: 7.66,
        feels_like: 5.92,
        temp_min: 7.66,
        temp_max: 7.66,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1022,
        humidity: 56,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "algo de nubes", icon: "02n" }
      ],
      clouds: { all: 19 },
      wind: { speed: 2.68, deg: 275, gust: 2.75 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-19 03:00:00"
    },
    {
      dt: 1737266400,
      main: {
        temp: 7.34,
        feels_like: 5.66,
        temp_min: 7.34,
        temp_max: 7.34,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1022,
        humidity: 54,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "muy nuboso", icon: "04n" }
      ],
      clouds: { all: 55 },
      wind: { speed: 2.51, deg: 281, gust: 2.65 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-19 06:00:00"
    },
    {
      dt: 1737277200,
      main: {
        temp: 8.74,
        feels_like: 8.05,
        temp_min: 8.74,
        temp_max: 8.74,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1023,
        humidity: 51,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 100 },
      wind: { speed: 1.65, deg: 338, gust: 1.91 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-19 09:00:00"
    },
    {
      dt: 1737288000,
      main: {
        temp: 11.37,
        feels_like: 9.69,
        temp_min: 11.37,
        temp_max: 11.37,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1022,
        humidity: 43,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 100 },
      wind: { speed: 0.37, deg: 24, gust: 0.71 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-19 12:00:00"
    },
    {
      dt: 1737298800,
      main: {
        temp: 11.97,
        feels_like: 10.48,
        temp_min: 11.97,
        temp_max: 11.97,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1021,
        humidity: 48,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 97 },
      wind: { speed: 1.71, deg: 107, gust: 1.19 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-19 15:00:00"
    },
    {
      dt: 1737309600,
      main: {
        temp: 10.03,
        feels_like: 8.63,
        temp_min: 10.03,
        temp_max: 10.03,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1021,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "muy nuboso", icon: "04n" }
      ],
      clouds: { all: 53 },
      wind: { speed: 1.1, deg: 97, gust: 1.53 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-19 18:00:00"
    },
    {
      dt: 1737320400,
      main: {
        temp: 8.71,
        feels_like: 7.53,
        temp_min: 8.71,
        temp_max: 8.71,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1022,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "cielo claro", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.19, deg: 303, gust: 1.61 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-19 21:00:00"
    },
    {
      dt: 1737331200,
      main: {
        temp: 7.29,
        feels_like: 5.56,
        temp_min: 7.29,
        temp_max: 7.29,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1022,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "algo de nubes", icon: "02n" }
      ],
      clouds: { all: 17 },
      wind: { speed: 2.57, deg: 308, gust: 2.57 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-20 00:00:00"
    },
    {
      dt: 1737342000,
      main: {
        temp: 7.26,
        feels_like: 5.87,
        temp_min: 7.26,
        temp_max: 7.26,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1021,
        humidity: 68,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 99 },
      wind: { speed: 2.14, deg: 288, gust: 2.15 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-20 03:00:00"
    },
    {
      dt: 1737352800,
      main: {
        temp: 7.2,
        feels_like: 5.68,
        temp_min: 7.2,
        temp_max: 7.2,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1020,
        humidity: 62,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 100 },
      wind: { speed: 2.28, deg: 283, gust: 2.4 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-20 06:00:00"
    },
    {
      dt: 1737363600,
      main: {
        temp: 8.66,
        feels_like: 7.76,
        temp_min: 8.66,
        temp_max: 8.66,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1021,
        humidity: 55,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 89 },
      wind: { speed: 1.86, deg: 258, gust: 2.16 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-20 09:00:00"
    },
    {
      dt: 1737374400,
      main: {
        temp: 12.6,
        feels_like: 11.12,
        temp_min: 12.6,
        temp_max: 12.6,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1021,
        humidity: 46,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 88 },
      wind: { speed: 1.75, deg: 257, gust: 2.75 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-20 12:00:00"
    },
    {
      dt: 1737385200,
      main: {
        temp: 15.03,
        feels_like: 13.79,
        temp_min: 15.03,
        temp_max: 15.03,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1019,
        humidity: 46,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 86 },
      wind: { speed: 1.94, deg: 217, gust: 3.69 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-20 15:00:00"
    },
    {
      dt: 1737396000,
      main: {
        temp: 12.76,
        feels_like: 11.61,
        temp_min: 12.76,
        temp_max: 12.76,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1019,
        humidity: 58,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 94 },
      wind: { speed: 2.37, deg: 277, gust: 3.22 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-20 18:00:00"
    },
    {
      dt: 1737406800,
      main: {
        temp: 10.98,
        feels_like: 9.83,
        temp_min: 10.98,
        temp_max: 10.98,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1020,
        humidity: 65,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 99 },
      wind: { speed: 2.28, deg: 285, gust: 2.58 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-20 21:00:00"
    },
    {
      dt: 1737417600,
      main: {
        temp: 9.93,
        feels_like: 8.83,
        temp_min: 9.93,
        temp_max: 9.93,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1019,
        humidity: 66,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 99 },
      wind: { speed: 2.37, deg: 291, gust: 2.41 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-21 00:00:00"
    },
    {
      dt: 1737428400,
      main: {
        temp: 9.91,
        feels_like: 9.35,
        temp_min: 9.91,
        temp_max: 9.91,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1018,
        humidity: 64,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 88 },
      wind: { speed: 1.7, deg: 288, gust: 1.67 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-21 03:00:00"
    },
    {
      dt: 1737439200,
      main: {
        temp: 10.57,
        feels_like: 9.25,
        temp_min: 10.57,
        temp_max: 10.57,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 60,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 94 },
      wind: { speed: 0.9, deg: 289, gust: 0.93 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-21 06:00:00"
    },
    {
      dt: 1737450000,
      main: {
        temp: 10.57,
        feels_like: 9.3,
        temp_min: 10.57,
        temp_max: 10.57,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1018,
        humidity: 62,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 100 },
      wind: { speed: 0.49, deg: 296, gust: 0.62 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-21 09:00:00"
    },
    {
      dt: 1737460800,
      main: {
        temp: 11.04,
        feels_like: 9.84,
        temp_min: 11.04,
        temp_max: 11.04,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 63,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 100 },
      wind: { speed: 0.98, deg: 194, gust: 0.99 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-21 12:00:00"
    },
    {
      dt: 1737471600,
      main: {
        temp: 14.19,
        feels_like: 13.31,
        temp_min: 14.19,
        temp_max: 14.19,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 63,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 100 },
      wind: { speed: 1.92, deg: 163, gust: 2.03 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-21 15:00:00"
    },
    {
      dt: 1737482400,
      main: {
        temp: 11.92,
        feels_like: 11.23,
        temp_min: 11.92,
        temp_max: 11.92,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 79,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 100 },
      wind: { speed: 3.75, deg: 163, gust: 3.99 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-21 18:00:00"
    },
    {
      dt: 1737493200,
      main: {
        temp: 11.36,
        feels_like: 10.67,
        temp_min: 11.36,
        temp_max: 11.36,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 81,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 99 },
      wind: { speed: 1.4, deg: 242, gust: 1.99 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-21 21:00:00"
    },
    {
      dt: 1737504000,
      main: {
        temp: 10.84,
        feels_like: 10.07,
        temp_min: 10.84,
        temp_max: 10.84,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 80,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 98 },
      wind: { speed: 2.03, deg: 268, gust: 2.38 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-22 00:00:00"
    },
    {
      dt: 1737514800,
      main: {
        temp: 11.25,
        feels_like: 10.34,
        temp_min: 11.25,
        temp_max: 11.25,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 73,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 100 },
      wind: { speed: 2.27, deg: 262, gust: 2.54 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-22 03:00:00"
    },
    {
      dt: 1737525600,
      main: {
        temp: 11.58,
        feels_like: 10.6,
        temp_min: 11.58,
        temp_max: 11.58,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 69,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 100 },
      wind: { speed: 2.83, deg: 278, gust: 3.11 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-22 06:00:00"
    },
    {
      dt: 1737536400,
      main: {
        temp: 12.94,
        feels_like: 11.96,
        temp_min: 12.94,
        temp_max: 12.94,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 64,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 100 },
      wind: { speed: 2.17, deg: 254, gust: 2.89 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-22 09:00:00"
    },
    {
      dt: 1737547200,
      main: {
        temp: 15.68,
        feels_like: 14.79,
        temp_min: 15.68,
        temp_max: 15.68,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 57,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 100 },
      wind: { speed: 0.92, deg: 162, gust: 0.86 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-22 12:00:00"
    },
    {
      dt: 1737558000,
      main: {
        temp: 15.01,
        feels_like: 14.29,
        temp_min: 15.01,
        temp_max: 15.01,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 66,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
      clouds: { all: 100 },
      wind: { speed: 3.59, deg: 125, gust: 3.79 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-01-22 15:00:00"
    },
    {
      dt: 1737568800,
      main: {
        temp: 13.41,
        feels_like: 12.74,
        temp_min: 13.41,
        temp_max: 13.41,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 74,
        temp_kf: 0
      },
      weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04n" }],
      clouds: { all: 100 },
      wind: { speed: 0.99, deg: 46, gust: 1.22 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-01-22 18:00:00"
    }
  ],
  city: {
    id: 6362115,
    name: "Valencia",
    coord: { lat: 39.4671, lon: -0.3557 },
    country: "ES",
    population: 0,
    timezone: 3600,
    sunrise: 1737098342,
    sunset: 1737133417
  }
};
