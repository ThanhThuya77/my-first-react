import { useState } from "react";

export const LoginPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   if (!isLoggedIn) {
  //     return (
  //       <div>
  //         Please log in
  //         <button onClick={() => setIsLoggedIn(true)}>Login</button>
  //       </div>
  //     );
  //   }
  return (
    <div>
      {isLoggedIn ? (
        <div>
          Welcome, Andy
          <button onClick={() => setIsLoggedIn(false)}>Log out</button>
        </div>
      ) : (
        <div>
          Please log in
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      )}
    </div>
  );
};
