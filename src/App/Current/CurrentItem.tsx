import React, { CSSProperties } from "react";

type CurrentItemType = {
  title: string;
  sub?: string;
  content: string;
  units?: string;
  icon: string;
};

const CurrentItem = ({
  title,
  sub,
  content,
  units,
  icon
}: CurrentItemType): JSX.Element => {
  return (
    <div style={itemStyles}>
      <div style={contentStyles}>
        <div style={titleStyles}>{title}</div>
        {sub && <span style={subStyles}>{sub}</span>}
        {content}
        {units && <span style={unitsStyles}> {units}</span>}
      </div>
      <div style={iconStyles}>{icon}</div>
    </div>
  );
};

const itemStyles: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "center",
  padding: "20px 10px 5px",
  background: "hsl(0deg 0% 100% / 5%)",
  borderRadius: 3
};
const contentStyles: CSSProperties = {
  position: "relative",
  fontSize: 18,
  fontWeight: 800
};
const titleStyles: CSSProperties = {
  position: "absolute",
  bottom: "100%",
  left: "0",
  fontSize: 12,
  fontWeight: 300
};
const unitsStyles: CSSProperties = { fontSize: 12 };
const subStyles: CSSProperties = { fontSize: 13 };
const iconStyles: CSSProperties = { fontSize: 40 };

export { CurrentItem };
