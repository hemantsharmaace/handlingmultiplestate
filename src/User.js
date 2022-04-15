import React, { useState } from "react";
import Userprofile from "./Userprofile";

function User() {
  const [state, setState] = useState({
    username: "Hemant",
    age: "32",
    likes: 0
  });

  const increment = (e) => {
    setState({ username: "hemantincre", age: "33", likes: state.likes + 1 });
  };

  const decrement = (e) => {
    if (state.likes > 0)
      setState({ username: "hemantdecre", age: "45", likes: state.likes + 1 });
  };

  return (
    <>
      <Userprofile userdata={state} />
      <input
        type="button"
        onClick={(e) => {
          increment(e);
        }}
        value="Like"
      />

      <input
        type="button"
        onClick={(e) => {
          decrement();
        }}
        value="DisLike"
      />
    </>
  );
}

export default User;
