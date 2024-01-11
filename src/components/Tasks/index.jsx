import React from "react";

import styles from "./tasks.module.css";

export function Task() {
  return (
    <section className={styles.tasks}>
      <header className="styles.header">
        <div>
          <p>Create Tasks</p>
          <span>10</span>
        </div>
        <div>
          <p>Completed Tasks</p>
          <span>1 of 10</span>
        </div>
      </header>
    </section>
  );
}
