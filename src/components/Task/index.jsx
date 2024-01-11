import React from "react";

import styles from "./task.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

export function Task({ task, onComplete }) {
  return (
    <>
      <div className={styles.task}>
        <button
          className={styles.checkContainer}
          onClick={() => onComplete(task?.id || " ")}
        >
          {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
        </button>
        <p  className={task.isCompleted ? styles.textCompleted : ""}>{task.title} </p>
        <button className={styles.deleteButton}>
          <TbTrash size={30} />
        </button>
      </div>
    </>
  );
}
