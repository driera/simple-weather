import { CurrentWeather } from "../domain/current-weather-entity";

export interface Success {
  status: "success";
  data: CurrentWeather;
}

export const success = (data: CurrentWeather): Success => ({
  status: "success",
  data
});

export interface Failure {
  status: "failure";
  error: Error | string;
  data: null;
}

export const failure = (error: Error | string): Failure => ({
  status: "failure",
  error,
  data: null
});
