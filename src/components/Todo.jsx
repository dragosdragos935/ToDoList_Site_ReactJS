import { useState } from "react";
import ToDoItem from "./ToDoItem";
import Form from "./Form";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

export default function ToDo() {
  const [todos, setToDos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const TotalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setToDos={setToDos} />
      <ToDoList todos={todos} setToDos={setToDos} />
      <Footer completedTodos={completedTodos} TotalTodos={TotalTodos} />
    </div>
  );
}
