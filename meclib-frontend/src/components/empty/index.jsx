import React from "react";

const Empty = ({ message }) => {
  return (
    <div className="w-[100%] h-[100%] grid place-items-center">
      {/* <img src='/images/105.svg' /> */}
      <h1>{message}</h1>
    </div>
  );
};

export default Empty;
