import { FunctionComponent } from "react";
import styles from "./CurrentView.module.css";
import { CurrentIntro } from "./CurrentIntro";
import { CurrentItem } from "./CurrentItem";
import { TitleWithLine } from "./TitleWithLine";
import { CurrentWeather } from "../../domain/current-weather-entity";

export const CurrentView: FunctionComponent<{
  weatherData: CurrentWeather | null;
}> = ({ weatherData }) => {
  if (!weatherData) return <div style={{ color: "#000" }}>loading...</div>;

  return (
    <section className={styles.current}>
      <CurrentIntro
        location={weatherData.city}
        time={new Date()}
        details={{
          temperature: weatherData.temperature,
          temperatureFealing: weatherData.temperatureFealing,
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
          icon="wind"
        />
        <CurrentItem
          value="Nubosidad"
          content={weatherData.clouds.toString()}
          units="%"
          icon="cloud"
        />
        <CurrentItem
          value="Humedad"
          content={weatherData.humidity.toString()}
          units="%"
          icon="raindrop"
        />
        <CurrentItem
          value="Presión"
          content={weatherData.pressure.toString()}
          units="mBar"
          icon="pressure"
        />
      </div>
      <div className={styles.detail}>
        <div className={styles.detailsTitle}>
          <TitleWithLine>Salida/Puesta de sol</TitleWithLine>
        </div>
        <CurrentItem
          value="Salida sol"
          content={weatherData.sunrise.toString()}
          icon="sunrise"
        />
        <CurrentItem
          value="Puesta sol"
          content={weatherData.sunset.toString()}
          icon="sunset"
        />
      </div>
    </section>
  );
};
