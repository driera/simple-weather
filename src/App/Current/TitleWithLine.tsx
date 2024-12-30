import React, { CSSProperties, FunctionComponent } from "react";

type TitleWithLineTypes = {
  children: React.ReactNode;
  style?: CSSProperties;
};

const TitleWithLine: FunctionComponent<TitleWithLineTypes> = ({
  children,
  style
}) => {
  return (
    <div style={{ ...titleStyles, ...style }}>
      <span>{children}</span>
      <span style={lineStyles}></span>
    </div>
  );
};

const titleStyles: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridGap: "10px",
  alignItems: "center",
  fontSize: "12px",
  textTransform: "uppercase"
};

const lineStyles: CSSProperties = {
  height: 1,
  borderTop: "var(--thin-line)"
};

export { TitleWithLine };
