import { currentWeatherDataSample } from "./__test_helpers__/data-samples";
import { fetchMock } from "./__test_helpers__/fetch-mock";
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
    fetchMock({ json: currentWeatherDataSample });

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
      sunrise: expect.any(String),
      sunset: expect.any(String),
      temperature: 12.58,
      temperatureMax: 13.25,
      temperatureMin: 11.41,
      windAngle: 45,
      windSpeed: 1.34
    });
  });
});
