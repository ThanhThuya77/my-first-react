Lesson 5

// a
<button onClick={handleSave()}>Save</button>
It will invoke the function immediately so we should remove the parentheses ().

// b
<button onClick={deleteTodo(todo.id)}>Delete</button>

It will invoke the function immediately so we should use arrow function for it: () => deleteTodo(todo.id)
// c
<input onChange={setName} />
It hasn't set the new value for the setName yet, onChange won't automatically assign the new value
<input onChange={(e) => setName(e.target.value)} />

// d

<form onSubmit={() => console.log("sent")}>
  <input />
  <button>Send</button>
</form>
// (the page reloads on every submit)
we should use e.preventDefault() to prevent the page reloads.
