import { useState } from "react";
import { Button } from "./Button";
export const ColorPicker = () => {
  const [color, setColor] = useState("pink");
  const handleColor = (value) => {
    setColor(value);
  };
  return (
    <div>
      <div>
        <Button onClick={() => handleColor("red")}>Red</Button>
        <Button onClick={() => handleColor("green")}>Green</Button>
        <Button onClick={() => handleColor("blue")}>Blue</Button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: color,
            width: 100,
            height: 100,
          }}
        />
      </div>
    </div>
  );
};
