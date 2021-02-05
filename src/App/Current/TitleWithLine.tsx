import React, { CSSProperties } from "react";

type TitleWithLineTypes = {
  children: React.ReactNode;
  style?: CSSProperties;
};

const TitleWithLine = ({
  children,
  style
}: TitleWithLineTypes): JSX.Element => {
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
