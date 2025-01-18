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

  it("formats the date to get a long date", () => {
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

    expect(result[0].dateLong).toBe("domingo, 19 de enero, 7:00");
  });

  it("formats the date to get the hour in AM/PM format", () => {
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

  it("filters data to use items with 6-hour step", () => {
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
        },
        {
          date: 1737288000,
          temperature: 10,
          temperatureMin: 8,
          temperatureMax: 14,
          state: "clear",
          stateDescription: "Clear sky",
          stateIcon: "sun",
          windSpeed: 15,
          windAngle: "E"
        },
        {
          date: 1737309600,
          temperature: 12,
          temperatureMin: 10,
          temperatureMax: 16,
          state: "rain",
          stateDescription: "Light rain",
          stateIcon: "cloud",
          windSpeed: 10,
          windAngle: "S"
        }
      ]
    };

    const result = formatForecastData(dataCollection);

    expect(result).toHaveLength(2);
    expect(result[0].date).toBe(1737266400);
    expect(result[1].date).toBe(1737309600);
  });
});
