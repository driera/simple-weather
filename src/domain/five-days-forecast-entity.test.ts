import { fiveDaysForecastDataSample } from "../repositories/__test_helpers__/data-samples";
import {
  fiveDaysForecastEntity,
  FiveDaysForecastRawData
} from "./five-days-forecast-entity";

describe("Five Days Forecast Entity", () => {
  it("should format forecast data", () => {
    const data: FiveDaysForecastRawData = fiveDaysForecastDataSample;

    const forecast = fiveDaysForecastEntity(data);

    expect(forecast.city).toBe(data.city.name);
    expect(forecast.list).toHaveLength(data.list.length);
    expect(forecast.list[0]).toEqual(
      expect.objectContaining({
        temperature: Math.round(data.list[0].main.temp),
        temperatureMin: Math.round(data.list[0].main.temp_min),
        temperatureMax: Math.round(data.list[0].main.temp_max),
        state: data.list[0].weather[0].main,
        stateDescription: data.list[0].weather[0].description,
        stateIcon: "cloud-dark",
        windSpeed: data.list[0].wind.speed,
        windAngle: "N"
      })
    );
  });
});
