import React, { useState } from "react";

import Logo from "../../assets/Logo.svg";
import { CiCirclePlus } from "react-icons/ci";
import styles from "./header.module.css";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit() {
    onAddTask();
  }

  function onChangeTitle(event) {
    setTitle(event?.target?.value || '');
    }

  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} />
        <form onSubmit={handleSubmit} className={styles.newTaskForm}>
          <input
            placeholder="add a new task"
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
          <button>
            Create
            <CiCirclePlus size={20} />
          </button>
        </form>
      </header>
    </div>
  );
}
