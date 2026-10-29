import { Button } from "./Button";

export const TodoItem = ({ todo, handleDoneTodo, handleDeleteTodo }) => {
  return (
    <div key={todo.id}>
      {/*
            style={{ textDecoration: todo.done && "line-through" }}
            1. Use a ternary for the style; "false" isn't a valid CSS value */}
      <p style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {`${todo.id} - ${todo.text}  `}
        <Button onClick={() => handleDoneTodo(todo.id)}>
          {todo?.done ? "Undo" : "Done"}
        </Button>
        <Button
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
        >
          Delete
        </Button>
      </p>
    </div>
  );
};

/* 

8. Thinking question: why should the “Delete” button call onDelete(id) instead of changing the todo list itself? What would go wrong if every TodoItem had its own copy of the list?

Props are read-only, they are only changed but their parent's function.
We should not change it directly, because the parent doesn't know it changes so don't re-render the component and other places use the old state got a confilcts the new state because the react tree still keep the old nodes with the deleted data, so when it search or find that id, but it doesn't exist will cause bugs. And it's hard to find.

*/
