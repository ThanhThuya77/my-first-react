import { useState } from "react";

export const BadList = () => {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  return (
    <div>
      <button onClick={() => setItems((prev) => prev.slice(1))}>
        Remove first
      </button>
      {items.map((item) => (
        <div key={crypto.randomUUID()}>
          {item} <input placeholder={`Note about ${item}`} />
        </div>
      ))}
    </div>
  );
};

/*
Before:
It look like, a king/queen when they die, all things belong to them then will be belong the next king/queen.
But in react's tree, it keeps the node when the ID isn't changed, if we provide a good ID that no one else can reuse that, of course they still can if they remember exactly the ID even it's hard or complex.
An unique ID just prevent that case doesn't mean that we can not cheat on it.
After
React create a new node so everything of the old one will be destroyed. So we don't have yellow in the input at banana anymore.
*/

/*

// a
{users.map(user => { <UserCard user={user} /> })}
missing key for each element and using braces without return the UserCard element is wrong
Remove braces or add return before the element

// b
{users.map(user => <UserCard user={user} />)}
missing key for each element 

// c
function UserCard({ key, user }) { return <p>{key}: {user.name}</p>; }
key isn't a prop pass from the parent, so we should have id prop instead get key

// d
{users.map(user => <UserCard key={Math.random()} user={user} />)}
using Math.random() can get the same number with the previous one,
it makes it doesn't destroy the old node with all properties belong to previous,
they will become the prop of the new one and cause showing unexpected data.

// e
{terms.map(t => (
  <>
    <dt>{t.word}</dt>
    <dd>{t.meaning}</dd>
  </>
))}
missing key, should use Fragment tag (full name) for this one with key


8. Thinking question: why is key={index} fine for a static list of navigation links, but dangerous for a todo list?
Because it's static, static means it doesn't change.
but with the todo list, we mark done a todo and it can disappear, so the index causes the noise,
the old node with the same index isn't destroyed, it keeps the node and just update the change
and all the properties of the old will belong to the new one.

*/
