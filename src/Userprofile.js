import React from "react";

function Userprofile({ userdata }) {
  return (
    <>
      <span>Name : {userdata.username}</span> <br />
      <span>Age : {userdata.age}</span> <br />
      <span>Likes : {userdata.likes}</span> <br />
    </>
  );
}

export default Userprofile;
