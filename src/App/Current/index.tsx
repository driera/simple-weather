import { FunctionComponent } from "react";
import styles from "./Current.module.css";
import { CurrentIntro } from "./CurrentIntro";
import { CurrentItem } from "./CurrentItem";
import { TitleWithLine } from "./TitleWithLine";

const Current: FunctionComponent = () => {
  return (
    <section className={styles.current}>
      <div className={styles.sun}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>Tiempo hoy</h1>
        <CurrentIntro
          location="Valencia"
          time={new Date()}
          details={{ temperature: 16.3, conditions: "Nubes bajas" }}
        />
        <div className={styles.detail}>
          <div className={styles.detailsTitle}>
            <TitleWithLine>Detalles</TitleWithLine>
          </div>
          <CurrentItem
            value="Viento"
            content="25"
            sub={270}
            units="km/h"
            icon="icon-wind"
          />
          <CurrentItem
            value="Nubosidad"
            content="23"
            units="%"
            icon="icon-cloud"
          />
          <CurrentItem
            value="Humedad"
            content="39"
            units="%"
            icon="icon-raindrop"
          />
          <CurrentItem
            value="Presión"
            content="1020"
            units="mBar"
            icon="icon-pressure"
          />
        </div>
        <div className={styles.detail}>
          <div className={styles.detailsTitle}>
            <TitleWithLine>Salida/Puesta de sol</TitleWithLine>
          </div>
          <CurrentItem value="Salida sol" content="07:45" icon="icon-sunrise" />
          <CurrentItem value="Puesta sol" content="18:34" icon="icon-sunset" />
        </div>
      </div>
    </section>
  );
};

export { Current };
