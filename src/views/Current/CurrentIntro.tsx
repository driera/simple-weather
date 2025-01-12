import React, { FunctionComponent } from "react";
import { LazySvg } from "../../components/icons/lazy-svg";
import styles from "./CurrentIntro.module.css";

export interface CurrentIntroType {
  location: string;
  time: Date;
  details: {
    temperature: number;
    temperatureFealing: number;
    conditions: string;
    icon: string | null;
  };
}

const CurrentIntro: FunctionComponent<CurrentIntroType> = ({
  location,
  time,
  details
}: CurrentIntroType) => {
  const { temperature, temperatureFealing, conditions, icon } = details;

  const formattedTime = () => {
    const hours = time.getHours();
    const minutes =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const date = time.toLocaleDateString("es-ES", { dateStyle: "medium" });
    const dayAndMonth = date.split(" ").slice(0, 2).join(" ");

    const now = "Hoy";

    return `${now}, ${dayAndMonth}, ${hours}:${minutes}`;
  };

  return (
    <div className={styles.intro}>
      <div className={styles.header}>
        <div className={styles.location}>{location}</div>
        <div className={styles.time}>{formattedTime()}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.conditions}>
          {icon && (
            <LazySvg name={icon} fill="white" width={128} height={128} />
          )}
          <span>{conditions}</span>
        </div>
        <div className={styles.temperature}>
          <div className={styles.tempContent}>
            {temperature}
            <span className={styles.tempSymbol}>º</span>
          </div>
          <div className={styles.tempFeeling}>
            Sensación {temperatureFealing}º
          </div>
        </div>
      </div>
    </div>
  );
};

export { CurrentIntro };
