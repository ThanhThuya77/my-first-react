import { useState } from "react";
import { Button } from "./Button";
export const LikeButton = () => {
  const [likeState, setLikeState] = useState({ isLiked: false, likeCount: 0 });
  return (
    <div>
      <Button
        onClick={() =>
          setLikeState({
            isLiked: !likeState.isLiked,
            likeCount: likeState.isLiked ? likeState.isLiked : 0,
          })
        }
      >
        {likeState.isLiked ? "❤️ Liked" : "🤍 Like"}
      </Button>
      <Button
        onClick={() =>
          setLikeState({ ...likeState, likeCount: likeState.likeCount + 1 })
        }
      >
        {likeState.likeCount} liked
      </Button>
    </div>
  );
};
