import React from "react";

function Bigbutton(props) {
  const { buttonname, color, fontcolor, buttonsize } = props;
  return (
    <>
      <button
        type="submit"
        className={`btn ${color} ${fontcolor} ${buttonsize}`}
      >
        {buttonname}
      </button>
    </>
  );
}

export default Bigbutton;
