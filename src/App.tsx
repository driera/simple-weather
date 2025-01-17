import React, { FunctionComponent, useEffect, useState } from "react";
import { CurrentView } from "./views/Current/CurrentView";
import { CurrentWeather } from "./domain/current-weather-entity";
import { WeatherApiClient } from "./repositories/weather-api-client";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useGeoLocation } from "./useGeoLocation";
import styles from "./App.module.css";
import { FiveDaysForecast, Forecast } from "./domain/five-days-forecast-entity";

const App: FunctionComponent = () => {
  const [weatherData, setWeatherData] = useState<CurrentWeather | null>(null);
  const [fiveDaysData, setFiveDaysData] = useState<FiveDaysForecast | null>(
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
        <div className={styles.header}>
          <h1 className={styles.title}>Hoy</h1>
        </div>
        <CurrentView weatherData={weatherData} />
        <div className={styles.fiveDays}>
          <h2 className={styles.title}>Próximas horas</h2>
          {fiveDaysData && (
            <div className={styles.fiveDaysList}>
              {fiveDaysData.list.map((item: Forecast) => (
                <div className={styles.listItem} key={item.date}>
                  <div className={styles.itemDate}>
                    {new Date(item.date * 1000).toLocaleString("es-ES", {
                      dateStyle: "short",
                      timeStyle: "short"
                    })}
                  </div>
                  <div className={styles.temperature}>{item.temperature}º</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default App;
