import { WeatherStateIconSymbol } from "../icons/get-icon";
import styles from "./CurrentIntro.module.css";
import React, { FunctionComponent } from "react";

export interface CurrentIntroType {
  location: string;
  time: Date;
  details: {
    temperature: number;
    conditions: string;
    icon: WeatherStateIconSymbol | null;
  };
}

const CurrentIntro: FunctionComponent<CurrentIntroType> = ({
  location,
  time,
  details
}: CurrentIntroType) => {
  const { temperature, conditions, icon } = details;

  const formattedTime = () => {
    const hours = time.getHours();
    const minutes =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const date = time.toLocaleDateString();

    return `${hours}:${minutes} – ${date}`;
  };

  return (
    <div className={styles.intro}>
      <div className={styles.location}>{location}</div>
      <div className={styles.time}>{formattedTime()}</div>
      <div className={styles.temp}>
        <span className={styles.tempContent}>{temperature}</span>
        <span className={styles.tempSymbol}>º</span>
      </div>
      <div className={styles.condition}>
        <span>{conditions}</span>
        {icon ?? ""}
      </div>
    </div>
  );
};

export { CurrentIntro };
