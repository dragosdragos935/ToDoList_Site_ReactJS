import styles from "./footer.module.css";

export default function Footer({ completedTodos, TotalTodos }) {
  return (
    <div className={styles.footer}>
      <span>Total Todos:{TotalTodos}</span>
      <br />
      <span>Completed Todos:{completedTodos}</span>
    </div>
  );
}
