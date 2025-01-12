import React, { FunctionComponent, useEffect, useState } from "react";
import { CurrentView } from "./views/Current/CurrentView";
import { CurrentWeather } from "./domain/current-weather-entity";
import { WeatherApiClient } from "./repositories/weather-api-client";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useGeoLocation } from "./useGeoLocation";

const App: FunctionComponent = () => {
  const [weatherData, setWeatherData] = useState<CurrentWeather | null>(null);
  const coordinates = useGeoLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (coordinates) {
        const weather = new WeatherApiClient().setCoordinates(coordinates);
        const result = await weather.getCurrentWeather();
        if (result.status === "success") {
          setWeatherData(result.data);
        }
      }
    };

    fetchData();
  }, [coordinates]);

  return (
    <ErrorBoundary>
      <CurrentView weatherData={weatherData} />;
    </ErrorBoundary>
  );
};

export default App;
