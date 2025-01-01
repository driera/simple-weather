// import fetchMock from "fetch-mock";
import { CurrentWeatherRawData } from "../domain/CurrentWeather";
import { fetchCurrentWeatherData } from "./CurrentWeatherRepository";

describe("CurrentWeatherRepository", () => {
  it("should make a POST to the correct url", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(dataSample),
        ok: true,
        status: 200
      } as Response)
    );

    const cityId = "2509954";
    const result = await fetchCurrentWeatherData(cityId);

    expect(result).toEqual({
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

  it("the fuction should return null on error", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404
      } as Response)
    );

    const cityId = "2509954";
    const result = await fetchCurrentWeatherData(cityId);

    expect(result).toEqual(null);
  });
});

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
