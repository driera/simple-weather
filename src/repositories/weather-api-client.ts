import { CurrentWeatherEntity } from "../domain/current-weather-entity";
import { Client } from "./client";
import { Failure, failure, Success, success } from "./result";

export class WeatherApiClient {
  cityId = "";
  baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  apiKey = import.meta.env.VITE_SIMPLE_WEATHER_REACT_API_KEY;
  lang = "es";
  units = "metric";

  async getCurrentWeather(): Promise<Success | Failure> {
    if (!this.cityId) return failure("City id is required");

    try {
      const response = await new Client().get(
        `${this.baseUrl}?id=${this.cityId}&units=${this.units}&lang=${this.lang}&APPID=${this.apiKey}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const currentWeather = new CurrentWeatherEntity(await response.json());
      return success(currentWeather.getWeatherConditions());
    } catch (error) {
      return this.reportFailure(error as Error);
    }
  }

  setCityId(cityId: string) {
    this.cityId = cityId;
    return this;
  }

  private reportFailure(error: Error | string): Failure {
    return failure(error);
  }
}
