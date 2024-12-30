import React, { CSSProperties, FunctionComponent } from "react";

export type CurrentIntroType = {
  location: string;
  time: Date;
  details: {
    temperature: number;
    conditions: string;
  };
};

const CurrentIntro: FunctionComponent<CurrentIntroType> = ({
  location,
  time,
  details
}: CurrentIntroType) => {
  const { temperature, conditions } = details;

  const formattedTime = () => {
    const hours = time.getHours();
    const minutes =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const date = time.toLocaleDateString();

    return `${hours}:${minutes} – ${date}`;
  };

  return (
    <div style={introStyles}>
      <div style={locationStyles}>{location}</div>
      <div style={timeStyles}>{formattedTime()}</div>
      <div style={tempStyles}>
        <span style={tempContentStyles}>{temperature}</span>
        <span style={tempSymbolStyles}>º</span>
      </div>
      <div style={conditionStyles}>
        <span>{conditions}</span>
      </div>
    </div>
  );
};

const introStyles: CSSProperties = {
  padding: "20px 0",
  marginBottom: 20
};

const locationStyles: CSSProperties = {
  fontSize: 32,
  fontWeight: 800
};

const timeStyles: CSSProperties = {
  fontSize: 14,
  fontWeight: 600
};

const tempStyles: CSSProperties = {
  paddingTop: 40,
  fontSize: "100px",
  lineHeight: 1
};

const tempContentStyles: CSSProperties = {
  display: "inline-block",
  verticalAlign: "middle"
};

const tempSymbolStyles: CSSProperties = {
  display: "inline-block",
  marginLeft: 5,
  verticalAlign: "top"
};

const conditionStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontSize: 18,
  fontWeight: 600,
  textTransform: "capitalize"
};

export { CurrentIntro };
