import React, { FunctionComponent } from "react";
import styles from "./CurrentItem.module.css";
import { LazySvg } from "../../components/icons/lazy-svg";

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
      <div className={styles.title}>
        <LazySvg name={icon} fill="white" width={24} height={24} />
        <span>{value}</span>
      </div>
      <div className={styles.content}>
        {!!sub && (
          <span className={styles.sub} data-testid="direction">
            {sub}
          </span>
        )}
        {content}
        {units && <span className={styles.units}> {units}</span>}
      </div>
    </div>
  );
};

export { CurrentItem };
