import React, { FunctionComponent } from "react";
import styles from "./TitleWithLine.module.css";

const TitleWithLine: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className={`${styles.title}`}>
      <span>{children}</span>
      <span className={styles.line}></span>
    </div>
  );
};

export { TitleWithLine };
