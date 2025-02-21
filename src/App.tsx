import React, { FunctionComponent, useEffect, useState } from "react";

import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { FiveDaysForecast } from "./components/FiveDaysForecast/FiveDaysForecast";
import { CurrentWeatherData } from "./domain/current-weather-entity";
import { FiveDaysForecastData } from "./domain/five-days-forecast-entity";

import { ErrorBoundary } from "./components/ErrorBoundary";
import { WeatherApiClient } from "./repositories/weather-api-client";
import { useGeoLocation } from "./useGeoLocation";

import styles from "./App.module.css";

import { NavLink, Route, Routes } from "react-router";

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

  const BASE_PATH =
    process.env.NODE_ENV === "production" ? "/simple-weather-react/" : "/";
  const paths = {
    CURRENT: BASE_PATH,
    FIVE_DAYS: BASE_PATH + "five"
  };

  return (
    <ErrorBoundary>
      <section className={styles.weather}>
        <div className={styles.sun}></div>
        <div className={styles.header}>
          <nav className={styles.navigation}>
            <NavLink end className={styles.link} to={paths.CURRENT}>
              Today
            </NavLink>
            <NavLink className={styles.link} to={paths.FIVE_DAYS}>
              Five Days
            </NavLink>
          </nav>
        </div>
        <Routes>
          <Route
            path={paths.CURRENT}
            element={<CurrentWeather weatherData={weatherData} />}
          />
          <Route
            path={paths.FIVE_DAYS}
            element={<FiveDaysForecast fiveDaysData={fiveDaysData} />}
          />
        </Routes>
      </section>
    </ErrorBoundary>
  );
};

export default App;
