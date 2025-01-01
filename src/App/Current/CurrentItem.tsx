import React, { FunctionComponent } from "react";
import styles from "./CurrentItem.module.css";

export interface CurrentItemType {
  value: string;
  sub?: string;
  content: string;
  units?: string;
  icon: string;
}

const CurrentItem: FunctionComponent<CurrentItemType> = ({
  value,
  sub,
  content,
  units,
  icon
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <div className={styles.title}>{value}</div>
        {!!sub && (
          <span className={styles.sub} data-testid="direction">
            {sub}
          </span>
        )}
        {content}
        {units && <span className={styles.units}> {units}</span>}
      </div>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export { CurrentItem };
