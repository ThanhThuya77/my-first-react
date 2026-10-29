import { useState } from "react";

export const NotificationBell = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      🔔{" "}
      {count > 0 && (
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
          }}
        >
          {count}
        </span>
      )}
      <button onClick={() => setCount(count + 1)}>Notify</button>
    </div>
  );
};
