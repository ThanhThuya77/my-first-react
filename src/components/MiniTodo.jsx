import { useState } from "react";
import { Button } from "./Button";

const defaultTodo = [
  { id: 1, text: "todo 1", done: false },
  { id: 2, text: "todo 2", done: false },
  { id: 3, text: "todo 3", done: false },
];

export const MiniTodo = () => {
  const [todos, setTodos] = useState(defaultTodo);

  const handleDoneTodo = (id) => {
    const newTodo = todos.map((data) =>
      data.id === id ? { ...data, done: !data.done } : data,
    );
    setTodos(newTodo);
  };

  const handleDeleteTodo = (id) => {
    const newTodo = todos.filter((data) => data.id !== id);
    setTodos(newTodo);
  };

  const handleAddSampleTodo = () => {
    setTodos([...todos, { id: Date.now(), text: "New task", done: false }]);
  };

  const countDone = todos.filter((data) => data.done).length;

  return (
    <div>
      <div>{`${countDone} of ${todos.length} done`}</div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p style={{ textDecoration: todo.done && "line-through" }}>
            {`${todo.id} - ${todo.text}  `}
            <Button onClick={() => handleDoneTodo(todo.id)}>Done</Button>
            <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
          </p>
        </div>
      ))}
      <Button onClick={handleAddSampleTodo}>Add sample todo</Button>
    </div>
  );
};

/*

// a
const [items, setItems] = useState([]);
const add = () => { items.push("new"); setItems(items); };
We should not update directly the state, I don't know why
But the correct way is using spread operation to clone a new array setItems([...items, "news"]);


// b
function Toggle() {
  const [on, setOn] = useState(false);
  return <button onClick={setOn(!on)}>{on ? "ON" : "OFF"}</button>;
}
onClick should get a function hasn't invoke yet, this one will invoke the setOn immedately and cause loop
It should be a arrow function or use a declaretive function in the body

// c
function Greeting({ isMorning }) {
  if (isMorning) {
    const [text] = useState("Good morning");
    return <p>{text}</p>;
  }
  return <p>Hello</p>;
}
useState should be at the top of a component and not be in any if, useState is known by its fixed order, if we put it in a if as a dynamic, it may cause getting wrong state.

// d
const [total, setTotal] = useState(0);
const [price, setPrice] = useState(100);
const [qty, setQty] = useState(2);
// ...and the code calls setTotal(price * qty) after every change
we don't need a new state if we can calculate or derive from existing data.
it just const total = price * qty.

7. Thinking question: now that you know state, answer the question from Lesson 3 again: what’s the difference between props and state?
Props are value that pass from parent to children components or functions, they are read-only.
Because if it is mutated, it will cause side effects (I don't know exactly what they are)
State are the value that we store and keep after every rendering without losing them. It is different from variables is it won't lose the data after re-rendering.

*/
