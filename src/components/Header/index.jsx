import React from "react";

import Logo from "../../assets/Logo.svg";
import { CiCirclePlus } from "react-icons/ci";
import styles from "./header.module.css";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} />
        <form className={styles.newTaskForm}>
          <input placeholder="add a new task" type="text" />
          <button>
            Create
            <CiCirclePlus size={20} />
          </button>
        </form>
      </header>
    </div>
  );
}
