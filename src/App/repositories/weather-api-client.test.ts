import { CurrentWeatherRawData } from "../domain/CurrentWeather";
import { failure } from "./result";
import { WeatherApiClient } from "./weather-api-client";

describe("Weather Repository", () => {
  it("should return error if city id is not provided", async () => {
    const result = await new WeatherApiClient().getCurrentWeather();

    expect(result).toEqual(failure("City id is required"));
  });

  it("retrieves data if city is provided", async () => {
    const cityId = "2509954";
    const fetch = fetchMock();

    const weather = new WeatherApiClient().setCityId(cityId);
    await weather.getCurrentWeather();

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&lang=es`
      ),
      {
        method: "GET"
      }
    );
  });

  it("should return null on error", async () => {
    const cityId = "2509954";
    fetchMock({ ok: false, status: 404 });

    const weather = new WeatherApiClient().setCityId(cityId);
    const result = await weather.getCurrentWeather();

    expect(result).toEqual(failure(Error("Network response was not ok")));
  });

  it("should return the correct current weather entity", async () => {
    fetchMock({ json: dataSample });

    const cityId = "2509954";
    const weather = new WeatherApiClient().setCityId(cityId);
    const result = await weather.getCurrentWeather();

    expect(result.data).toEqual({
      city: "Valencia",
      clouds: 40,
      humidity: 82,
      pressure: 1030,
      state: "Clouds",
      stateDescription: "nubes dispersas",
      stateIcon: "03n",
      sunrise: 1735629698,
      sunset: 1735663641,
      temperature: 12.58,
      temperatureMax: 13.25,
      temperatureMin: 11.41,
      windAngle: 45,
      windSpeed: 1.34
    });
  });
});

const fetchMock = ({
  json = {},
  ok = true,
  status = 200
}: {
  json?: object;
  ok?: boolean;
  status?: number;
} = {}) =>
  (global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(json),
      ok,
      status
    } as Response)
  ));

const dataSample: CurrentWeatherRawData = {
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
