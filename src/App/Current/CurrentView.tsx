import { FunctionComponent } from "react";
import styles from "./Current.module.css";
import { CurrentIntro } from "./CurrentIntro";
import { CurrentItem } from "./CurrentItem";
import { TitleWithLine } from "./TitleWithLine";
import { CurrentWeather } from "../domain/current-weather-entity";

export const CurrentView: FunctionComponent<{
  weatherData: CurrentWeather | null;
}> = ({ weatherData }) => {
  if (!weatherData) return <div>loading...</div>;

  return (
    <section className={styles.current}>
      <div className={styles.sun}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>Tiempo hoy</h1>
        <CurrentIntro
          location={weatherData.city}
          time={new Date()}
          details={{
            temperature: weatherData.temperature,
            conditions: weatherData.stateDescription,
            icon: weatherData.stateIcon
          }}
        />
        <div className={styles.detail}>
          <div className={styles.detailsTitle}>
            <TitleWithLine>Detalles</TitleWithLine>
          </div>
          <CurrentItem
            value="Viento"
            content={weatherData.windSpeed.toString()}
            sub={weatherData.windAngle}
            units="km/h"
            icon="icon-wind"
          />
          <CurrentItem
            value="Nubosidad"
            content={weatherData.clouds.toString()}
            units="%"
            icon="icon-cloud"
          />
          <CurrentItem
            value="Humedad"
            content={weatherData.humidity.toString()}
            units="%"
            icon="icon-raindrop"
          />
          <CurrentItem
            value="Presión"
            content={weatherData.pressure.toString()}
            units="mBar"
            icon="icon-pressure"
          />
        </div>
        <div className={styles.detail}>
          <div className={styles.detailsTitle}>
            <TitleWithLine>Salida/Puesta de sol</TitleWithLine>
          </div>
          <CurrentItem
            value="Salida sol"
            content={weatherData.sunrise.toString()}
            icon="icon-sunrise"
          />
          <CurrentItem
            value="Puesta sol"
            content={weatherData.sunset.toString()}
            icon="icon-sunset"
          />
        </div>
      </div>
    </section>
  );
};
