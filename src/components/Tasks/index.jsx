import React from "react";

import { Task } from "../Task";
import styles from "./tasks.module.css";

export function Tasks({ tasks }) {
    const tasksQuantity =tasks.length;
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create Tasks</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Completed </p>
          <span>1 of {tasksQuantity}</span>
        </div>
      </header>
      <div className="styles.list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
