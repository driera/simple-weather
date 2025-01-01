import { currentWeatherDataSample } from "../repositories/__test_helpers__/data-samples";
import {
  CurrentWeatherEntity,
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

    const weatherEntity = new CurrentWeatherEntity(data);
    const currentWeather = weatherEntity.getWeatherConditions();

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

    const weatherEntity = new CurrentWeatherEntity(data);
    const currentWeather = weatherEntity.getWeatherConditions();

    expect(currentWeather).toEqual(
      expect.objectContaining({
        windAngle: "E"
      })
    );
  });
});
