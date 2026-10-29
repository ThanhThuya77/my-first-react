import { Activity, useState } from "react";
import { Counter } from "./Counter";

export const StateResetExperiment = () => {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);

  return (
    <div>
      {show1 && <Counter />}
      <div hidden={!show2}>
        <Counter />
      </div>
      <Activity mode={show3 ? "visible" : "hidden"}>
        <Counter />
      </Activity>
      <button onClick={() => setShow1(!show1)}>Toggle Counter 1</button>
      <button onClick={() => setShow2(!show2)}>Toggle Counter 2</button>
      <button onClick={() => setShow3(!show3)}>Toggle Counter 3</button>
    </div>
  );
};

// Show 1 lost the state, but show2 and show3 keep the state because they still keep the instance of component on the tree.
// But the show1 is destroyed that node in the tree.

/*

7. Thinking question: in the Tabs of a settings page, which would you choose: && or <Activity>? What about a “Success!” message after saving? Explain why.

if the tabs of a setting page doesn't have form or any data that need to keep the state
then we just use && to toggle tabs, but if the tabs have form or any data that need to keep the state, we should use <Activity> to toggle tabs.

For "Success!" message after saving?
We need it for user experiment, they should be known what is happening.
*/
