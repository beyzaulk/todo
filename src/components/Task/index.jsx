import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

import styles from "./task.module.css";

export function Task({ task, onComplete, onDelete }) {
  return (
    <>
      <div className={styles.task}>
        <button
          className={styles.checkContainer}
          onClick={() => onComplete(task?.id || " ")}
        >
          {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
        </button>
        <p className={task.isCompleted ? styles.textCompleted : ""}>
          {task.title}
        </p>
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(task?.id || " ")}
        >
          <TbTrash size={30} />
        </button>
      </div>
    </>
  );
}
