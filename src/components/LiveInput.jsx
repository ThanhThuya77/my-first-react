import { useState } from "react";

export const LiveInput = () => {
  const [liveInput, setLiveInput] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  const handleLiveInput = (e) => {
    const value = e.target.value;
    setLiveInput(value.toUpperCase());
    console.log("liveInput", liveInput);
  };
  const count = liveInput?.length || 0;
  const maxLength = 50;
  return (
    <div>
      <p style={{ color: count > maxLength ? "red" : "black" }}>
        {`${count} / ${maxLength}`}
      </p>
      <input
        type="text"
        value={liveInput}
        onChange={handleLiveInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setIsPressed(true);
          }
        }}
      />
      {isPressed && <p>You pressed Enter with: {liveInput}</p>}
    </div>
  );
};
