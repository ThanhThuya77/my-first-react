import { Button } from "./Button";

export const CardButton = () => {
  return (
    <div
      role="button"
      style={{ height: 100, backgroundColor: "lightgray" }}
      onClick={() => console.log("Card clicked")}
    >
      <Button
        onClick={(e) => {
          e.stopPropagation();
          console.log("Delete clicked");
        }}
      >
        Delete
      </Button>
    </div>
  );
};
