import React, { CSSProperties } from "react";

const CurrentIntro = (): JSX.Element => {
  return (
    <div style={introStyles}>
      <div style={locationStyles}>Valencia</div>
      <div style={timeStyles}>21:00 - 30/01/2021</div>
      <div style={tempStyles}>
        <span style={tempContentStyles}>17</span>
        <span style={tempSymbolStyles}>º</span>
      </div>
      <div style={conditionStyles}>
        <span>Nubes bajas</span>
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
