import { useState } from "react";
import { Button } from "./Button";
import { TodoItem } from "./TodoItem";

const defaultTodo = [
  { id: 1, text: "todo 1", done: false },
  { id: 2, text: "todo 2", done: false },
  { id: 3, text: "todo 3", done: false },
];

export const MiniTodo = () => {
  const [todos, setTodos] = useState(defaultTodo);
  const [filter, setFilter] = useState("All");

  const handleDoneTodo = (id) => {
    const newTodo = todos.map((data) =>
      data.id === id ? { ...data, done: !data.done } : data,
    );
    setTodos(newTodo);
  };

  const handleDeleteTodo = (id) => {
    // 3. Use updaters, since the new list depends on the old one
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddNewTodo = (e) => {
    e.preventDefault();
    const target = e.target[0] || {};
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: target.value.trim(), done: false },
    ]);
    e.target.reset();
  };

  let filteredTodos = todos;
  if (filter !== "All") {
    const filteredCondition = filter === "Active" ? false : true;
    filteredTodos = todos.filter((todo) => todo.done === filteredCondition);
  }

  const countDone = todos.filter((data) => data.done).length;

  return (
    <div>
      <div>
        <p>Filtered by: {filter}</p>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
      </div>
      <div>{`${countDone} of ${todos.length} done`}</div>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo?.id}
          todo={todo}
          handleDoneTodo={handleDoneTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
      <form onSubmit={handleAddNewTodo}>
        <input type="text" />
        <Button type="submit">Add todo</Button>
      </form>
    </div>
  );
};

/*

// a
const [items, setItems] = useState([]);
const add = () => { items.push("new"); setItems(items); };
We should not update directly the state, I don't know why
But the correct way is using spread operation to clone a new array setItems([...items, "news"]);

answer: ✅ the fix is right. You wrote “I don’t know why”, but you’ve learned it since. It’s the heap lesson:

push changes the array at the same address.
setItems(items) gives React the same address.
React checks Object.is(old, new), gets true (same address), concludes nothing changed, and skips the re-render.

The spread creates a new array at a new address, so React sees the change. Even better, use an updater: setItems(prev => [...prev, "new"]). (Small typo: you wrote "news".)

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
