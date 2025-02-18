import React, { FunctionComponent, useEffect, useState } from "react";

import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { CurrentWeatherData } from "./domain/current-weather-entity";
import { FiveDaysForecast } from "./components/FiveDaysForecast/FiveDaysForecast";
import { FiveDaysForecastData } from "./domain/five-days-forecast-entity";

import { WeatherApiClient } from "./repositories/weather-api-client";
import { useGeoLocation } from "./useGeoLocation";
import { ErrorBoundary } from "./components/ErrorBoundary";

import styles from "./App.module.css";

const App: FunctionComponent = () => {
  const [weatherData, setWeatherData] = useState<CurrentWeatherData | null>(
    null
  );
  const [fiveDaysData, setFiveDaysData] = useState<FiveDaysForecastData | null>(
    null
  );
  const coordinates = useGeoLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (coordinates) {
        const weather = new WeatherApiClient().setCoordinates(coordinates);
        const currentWeather = await weather.getCurrentWeather();
        if (currentWeather.status === "success") {
          setWeatherData(currentWeather.data);
        }

        const fiveDays = await weather.getFiveDaysWeather();
        if (fiveDays.status === "success") {
          setFiveDaysData(fiveDays.data);
        }
      }
    };

    fetchData();
  }, [coordinates]);

  return (
    <ErrorBoundary>
      <section className={styles.weather}>
        <div className={styles.sun}></div>
        <CurrentWeather weatherData={weatherData} />
        <FiveDaysForecast fiveDaysData={fiveDaysData} />
      </section>
    </ErrorBoundary>
  );
};

export default App;
