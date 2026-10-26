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
