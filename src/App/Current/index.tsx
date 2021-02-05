import React, { CSSProperties, FunctionComponent } from "react";
import { CurrentIntro } from "./CurrentIntro";
import { CurrentItem } from "./CurrentItem";
import { TitleWithLine } from "./TitleWithLine";

const Current: FunctionComponent = () => {
  return (
    <section style={currentStyles}>
      <div style={sunStyles}></div>
      <div style={containerStyles}>
        <h1 style={titleStyles}>Tiempo hoy</h1>
        <CurrentIntro
          location="Valencia"
          time={new Date()}
          details={{ temperature: 16.3, conditions: "Nubes bajas" }}
        />
        <div style={detailStyles}>
          <TitleWithLine style={detailsTitleStyles}>Detalles</TitleWithLine>
          <CurrentItem
            title="Viento"
            content="25"
            sub="O"
            units="km/h"
            icon="icon-wind"
          />
          <CurrentItem
            title="Nubosidad"
            content="23"
            units="%"
            icon="icon-cloud"
          />
          <CurrentItem
            title="Humedad"
            content="39"
            units="%"
            icon="icon-raindrop"
          />
          <CurrentItem
            title="Presión"
            content="1020"
            units="mBar"
            icon="icon-pressure"
          />
        </div>
        <div style={detailStyles}>
          <TitleWithLine style={detailsTitleStyles}>
            Salida/Puesta de sol
          </TitleWithLine>
          <CurrentItem title="Salida sol" content="07:45" icon="icon-sunrise" />
          <CurrentItem title="Puesta sol" content="18:34" icon="icon-sunset" />
        </div>
      </div>
    </section>
  );
};

const currentStyles: CSSProperties = {
  position: "relative",
  padding: "15px 0",
  background: "linear-gradient(180deg, #10205b, #463d86, #9c5ca3)"
};

const sunStyles: CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundImage: `radial-gradient(
    circle at 50% 102%,
    hsla(16, 100%, 95%, 0.8) 0%,
    hsla(16, 100%, 95%, 0.8) 2.9%,
    hsla(16, 100%, 95%, 0.6) 3%,
    hsla(16, 100%, 95%, 0.1) 10%,
    hsla(16, 100%, 95%, 0) 50%
  )`,
  opacity: 0.75
};

const containerStyles: CSSProperties = {
  position: "relative",
  maxWidth: 1100,
  margin: "0 auto"
};

const titleStyles: CSSProperties = {
  fontSize: 20,
  marginBottom: 40
};

const detailStyles: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridAutoRows: "auto",
  gridGap: 10,
  justifyContent: "space-between",
  marginBottom: 20
};

const detailsTitleStyles: CSSProperties = {
  gridColumn: "span 2"
};
export { Current };
