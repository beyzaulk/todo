import React from "react";

import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";

export function Task() {
  return (
    <>
      <div className={styles.task}>
        <button className={styles.checkContainer}></button>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button className={styles.deleteButton}>
          <TbTrash size={20} />
        </button>
      </div>
    </>
  );
}
