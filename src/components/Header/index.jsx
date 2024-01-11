import Logo from "../../assets/Logo.svg";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} />
      <form className={styles.newTaskForm}>
        <input placeholder="add a new task" type="text" />
        <button>Create</button>
      </form>
    </header>
  );
}
