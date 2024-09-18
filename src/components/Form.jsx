import { useState } from "react";

export default function Form({ todos, setToDos }) {
  const [todo, setTodo] = useState(""); //initial value

  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...todos, todo]); //mantain the previous item using spread operator
    setTodo("");
    console.log(todos);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)} //we use an event e using a callback function
        value={todo}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}
