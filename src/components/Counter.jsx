import { useState } from "react";
import { Button } from "./Button";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleAddThree = () => {
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
    console.log("count", count);
    // setCount doesn't affect immediately, so the count state will keep the same current value on ... (please help me, it keep that value where ? on component tree?), even I call SetCount times.
    // but if I use setCount with updater function, it will get the state where it stored but haven't affect yet, but get the latest to you, instead get the count in the local variable that you declared above.

    /*
    There are two different places, and that’s the key to understanding the snapshot:

1. YOUR FUNCTION CALL (this render)           2. REACT'S TREE (the instance)
   const count = 0  ← a local constant           Counter  hook slot 0: 0
   handleAddThree remembers it (closure)                  update queue: [ ]
count is a local constant of this render. It lives in the function call that produced the current screen, and handleAddThree (created in the same render) remembers it as a closure. It’s 0 for the whole life of that handler. That’s why console.log prints the old value.
The real, stored state lives in React’s tree, in the instance’s hook slot, and every setCount call adds an item to the update queue stored next to it.
    */
  };
  return (
    <div>
      <p style={{ color: count >= 0 ? "green" : "red" }}>{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      <Button onClick={handleAddThree}>+3</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </div>
  );
};
