import { currentWeatherDataSample } from "./__test_helpers__/data-samples";
import { fetchMock } from "./__test_helpers__/fetch-mock";
import { failure } from "./result";
import { WeatherApiClient } from "./weather-api-client";

describe("Weather Repository", () => {
  describe("current weather", () => {
    it("should return error if city id or coordinates are not provided", async () => {
      const result = await new WeatherApiClient().getCurrentWeather();

      expect(result).toEqual(
        failure("City id or location coordinates are required")
      );
    });

    it("retrieves current weather data if city is provided", async () => {
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

    it("retrieves data if coordinates are provided", async () => {
      const coordinates = { lat: 39.46975, lon: -0.37739 };
      const fetch = fetchMock();

      const weather = new WeatherApiClient().setCoordinates(coordinates);
      await weather.getCurrentWeather();

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&lang=es`
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
        stateIcon: expect.any(String),
        sunrise: expect.any(String),
        sunset: expect.any(String),
        temperature: expect.any(Number),
        temperatureFealing: expect.any(Number),
        temperatureMax: expect.any(Number),
        temperatureMin: expect.any(Number),
        windAngle: expect.any(String),
        windSpeed: 1.34
      });
    });
  });

  describe("five days forecast", () => {
    it("retrieves five days weather data if city is provided", async () => {
      const cityId = "2509954";
      const fetch = fetchMock();

      const weather = new WeatherApiClient().setCityId(cityId);
      await weather.getFiveDaysWeather();

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining(
          `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&lang=es`
        ),
        {
          method: "GET"
        }
      );
    });

    it("retrieves five days weather data if coordinates are provided", async () => {
      const coordinates = { lat: 39.46975, lon: -0.37739 };
      const fetch = fetchMock();

      const weather = new WeatherApiClient().setCoordinates(coordinates);
      await weather.getFiveDaysWeather();

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&lang=es`
        ),
        {
          method: "GET"
        }
      );
    });
  });
});
