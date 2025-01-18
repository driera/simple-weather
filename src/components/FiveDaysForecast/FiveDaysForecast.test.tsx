import { FiveDaysForecastData } from "../../domain/five-days-forecast-entity";
import { formatForecastData } from "./FiveDaysForecast";

describe("FiveDaysForecast", () => {
  it("formats the date to get the day of the week and the day of the month", () => {
    const dataCollection: FiveDaysForecastData = {
      city: "Barcelona",
      list: [
        {
          date: 1737266400,
          temperature: 8,
          temperatureMin: 6,
          temperatureMax: 12,
          state: "clouds",
          stateDescription: "Today is cloudy",
          stateIcon: "sun",
          windSpeed: 22,
          windAngle: "NE"
        }
      ]
    };

    const result = formatForecastData(dataCollection);

    expect(result[0].dayOfTheWeek).toBe("D19");
  });

  it("formats the date the hour in AM/PM format", () => {
    const dataCollection: FiveDaysForecastData = {
      city: "Barcelona",
      list: [
        {
          date: 1737266400,
          temperature: 8,
          temperatureMin: 6,
          temperatureMax: 12,
          state: "clouds",
          stateDescription: "Today is cloudy",
          stateIcon: "sun",
          windSpeed: 22,
          windAngle: "NE"
        }
      ]
    };

    const result = formatForecastData(dataCollection);

    expect(result[0].hour).toBe("7 AM");
  });
});
