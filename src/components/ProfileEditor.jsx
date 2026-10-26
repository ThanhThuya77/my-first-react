import { useState } from "react";
import { Button } from "./Button";

export const ProfileEditor = () => {
  const [profile, setProfile] = useState({
    name: "Andy",
    city: "Saigon",
    level: 1,
  });
  return (
    <div>
      <div>
        <p>{profile.name}</p>
        <p>{profile.city}</p>
        <p>{profile.level}</p>
      </div>
      <div>
        <Button onClick={() => setProfile({ ...profile, city: "Hanoi" })}>
          Move to Hanoi
        </Button>
        <Button
          onClick={() =>
            setProfile((pre) => ({ ...pre, level: pre.level + 1 }))
          }
        >
          Level up
        </Button>
      </div>
    </div>
  );
};
