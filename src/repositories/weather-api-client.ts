import { CurrentWeatherEntity } from "../domain/current-weather-entity";
import { Client } from "./client";
import { Failure, failure, Success, success } from "./result";

const NO_CITY_ID_OR_COORDINATES_ERROR =
  "City id or location coordinates are required";

export class WeatherApiClient {
  cityId = "";
  baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  apiKey = import.meta.env.VITE_SIMPLE_WEATHER_REACT_API_KEY;
  lang = "es";
  units = "metric";
  coordinates: { lat: number; lon: number } | null = null;

  async getCurrentWeather(): Promise<Success | Failure> {
    if (!this.cityId && !this.coordinates)
      return failure(NO_CITY_ID_OR_COORDINATES_ERROR);

    try {
      const locationParameters = this.cityId
        ? `id=${this.cityId}`
        : `lat=${this.coordinates!.lat}&lon=${this.coordinates!.lon}`;
      const url = `${this.baseUrl}?${locationParameters}&units=${this.units}&lang=${this.lang}&APPID=${this.apiKey}`;

      const response = await new Client().get(url);
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

  setCoordinates(coordinates: { lat: number; lon: number }) {
    this.coordinates = coordinates;
    return this;
  }

  private reportFailure(error: Error | string): Failure {
    return failure(error);
  }
}
