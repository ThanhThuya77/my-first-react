import { useState } from "react";
import { Button } from "./Button";

const OTHERS_LIKES = 12;

export const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const count = OTHERS_LIKES + (isLiked ? 1 : 0); // derived: can never get out of sync

  return (
    <Button onClick={() => setIsLiked((liked) => !liked)}>
      {isLiked ? "❤️ Liked" : "🤍 Like"} · {count}
    </Button>
  );
};
