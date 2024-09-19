import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setToDos }) {
  //const [todo, setTodo] = useState(""); //initial value
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...todos, todo]); //mantain the previous item using spread operator
    setTodo({ name: "", done: false });
    console.log(todos);
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })} //we use an event e using a callback function
          value={todo.name}
          type="text"
          placeholder="Enter to do item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
