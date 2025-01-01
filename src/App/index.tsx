import React, { FunctionComponent, useEffect, useState } from "react";
import { CurrentView } from "./Current/CurrentView";
import { fetchCurrentWeatherData } from "./repositories/CurrentWeatherRepository";
import CurrentWeather from "./domain/CurrentWeather";

const App: FunctionComponent = () => {
  const [weatherData, setWeatherData] = useState<CurrentWeather | null>(null);
  const cityId = "2509954"; // Valencia, Spain

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCurrentWeatherData(cityId);
      setWeatherData(data);
    };

    fetchData();
  }, []);

  return <CurrentView weatherData={weatherData} />;
};

export default App;
