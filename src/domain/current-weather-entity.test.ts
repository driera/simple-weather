import { currentWeatherDataSample } from "../repositories/__test_helpers__/data-samples";
import {
  currentWeatherEntity,
  CurrentWeatherRawData
} from "./current-weather-entity";

describe("Current Weather Entity", () => {
  it("should format sun data", () => {
    const data: CurrentWeatherRawData = {
      ...currentWeatherDataSample,
      sys: {
        ...currentWeatherDataSample.sys,
        sunrise: 1735714800,
        sunset: 1735750800
      }
    };

    const currentWeather = currentWeatherEntity(data);

    expect(currentWeather).toEqual(
      expect.objectContaining({
        sunrise: "08:00",
        sunset: "18:00"
      })
    );
  });

  it("should format wind data", () => {
    const data: CurrentWeatherRawData = {
      ...currentWeatherDataSample,
      wind: {
        ...currentWeatherDataSample.wind,
        deg: 90
      }
    };

    const currentWeather = currentWeatherEntity(data);

    expect(currentWeather).toEqual(
      expect.objectContaining({
        windAngle: "E"
      })
    );
  });

  it("should return weather state symbol", () => {
    const data: CurrentWeatherRawData = {
      ...currentWeatherDataSample,
      weather: [
        {
          ...currentWeatherDataSample.weather[0],
          icon: "03n"
        }
      ]
    };

    const currentWeather = currentWeatherEntity(data);

    expect(currentWeather).toEqual(
      expect.objectContaining({
        stateIcon: "cloud"
      })
    );
  });

  it("should round temperature values", () => {
    const data: CurrentWeatherRawData = {
      ...currentWeatherDataSample,
      main: {
        ...currentWeatherDataSample.main,
        temp: 20.75,
        temp_min: 20.12,
        temp_max: 21.9,
        feels_like: 20.5
      }
    };

    const currentWeather = currentWeatherEntity(data);

    expect(currentWeather).toEqual(
      expect.objectContaining({
        temperature: 21,
        temperatureMin: 20,
        temperatureMax: 22,
        temperatureFealing: 21
      })
    );
  });
});
