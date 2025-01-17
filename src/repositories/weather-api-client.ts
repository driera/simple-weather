import {
  CurrentWeatherData,
  currentWeatherEntity
} from "../domain/current-weather-entity";
import {
  FiveDaysForecast,
  fiveDaysForecastEntity
} from "../domain/five-days-forecast-entity"; // new import
import { Client } from "./client";
import { Failure, failure, Success, success } from "./result";

const NO_CITY_ID_OR_COORDINATES_ERROR =
  "City id or location coordinates are required";

export class WeatherApiClient {
  cityId = "";
  currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather";
  fiveDaysForecastUrl = "https://api.openweathermap.org/data/2.5/forecast";
  apiKey = import.meta.env.VITE_SIMPLE_WEATHER_REACT_API_KEY;
  lang = "es";
  units = "metric";
  coordinates: { lat: number; lon: number } | null = null;

  async getCurrentWeather(): Promise<Success<CurrentWeatherData> | Failure> {
    if (!this.isLocationProvided())
      return failure(NO_CITY_ID_OR_COORDINATES_ERROR);

    try {
      const url = this.buildUrl(this.currentWeatherUrl);
      const response = await new Client().get(url);
      this.ensureResponseOk(response);

      const currentWeather = currentWeatherEntity(await response.json());
      return success(currentWeather);
    } catch (error) {
      return this.reportFailure(error as Error);
    }
  }

  async getFiveDaysWeather(): Promise<Success<FiveDaysForecast> | Failure> {
    if (!this.isLocationProvided())
      return failure(NO_CITY_ID_OR_COORDINATES_ERROR);

    try {
      const url = this.buildUrl(this.fiveDaysForecastUrl);
      const response = await new Client().get(url);
      this.ensureResponseOk(response);

      const forecastData = fiveDaysForecastEntity(await response.json());
      return success(forecastData);
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

  private isLocationProvided(): boolean {
    return !!this.cityId || !!this.coordinates;
  }

  private buildUrl(base: string): string {
    const locationParameters = this.cityId
      ? `id=${this.cityId}`
      : `lat=${this.coordinates!.lat}&lon=${this.coordinates!.lon}`;
    return `${base}?${locationParameters}&units=${this.units}&lang=${this.lang}&APPID=${this.apiKey}`;
  }

  private ensureResponseOk(response: Response) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  }

  private reportFailure(error: Error | string): Failure {
    return failure(error);
  }
}
