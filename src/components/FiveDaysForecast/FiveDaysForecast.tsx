import React, { FunctionComponent } from "react";
import {
  FiveDaysForecastData,
  Forecast
} from "../../domain/five-days-forecast-entity";
import styles from "./FiveDaysForecast.module.css";

export const FiveDaysForecast: FunctionComponent<{
  fiveDaysData: FiveDaysForecastData | null;
}> = ({ fiveDaysData }) => {
  if (!fiveDaysData) return null;

  return (
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
  );
};
