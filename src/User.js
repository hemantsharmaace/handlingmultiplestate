import React, { useState } from "react";

function User() {
  const [state, setState] = useState({
    name: "",
    likes: 0,
    age: ""
  });
  // example of setting this kind of state
  const incrementMylikes = (prevState) => {
    console.log(state.likes);

    //  setState({ likes: state.likes + 1 });
  };

  const decrementMylikes = () => {
    setState({ likes: 2 });
  };

  return (
    <>
      {/* <Userprofile userdata={state} /> */}
      <input
        type="button"
        onClick={(e) => {
          incrementMylikes();
        }}
        value="Like"
      />

      <input
        type="button"
        onClick={(e) => {
          decrementMylikes();
        }}
        value="DisLike"
      />
    </>
  );
}

export default User;
