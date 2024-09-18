import { useState } from "react";
import ToDoItem from "./ToDoItem";
import Form from "./Form";
import ToDoList from "./ToDoList";

export default function ToDo() {
  const [todos, setToDos] = useState([]);
  return (
    <div>
      <Form todos={todos} setToDos={setToDos} />
      <ToDoList todos={todos} />
    </div>
  );
}
