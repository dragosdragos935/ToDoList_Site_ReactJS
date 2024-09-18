import ToDoItem from "./ToDoItem";
export default function ToDoList({ todos }) {
  return (
    <div>
      {" "}
      {todos.map((item) => (
        <ToDoItem key={item} item={item} />
      ))}
    </div>
  );
}
