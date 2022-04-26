import React from "react";
import "../../Pages/Madhan page/Madhan.css";

function Driverview(props) {
  const { imgpath, name } = props;
  return (
    <div className="driverprofilebg pt-3 pb-1">
      <div className="driverprofile mt-4 mb-4 pt-4 pb-4">
        <img src={imgpath} className="" height="100" width="100" alt="" />
        <h5 className="mt-3 mb-2">{name}</h5>
      </div>
    </div>
  );
}

export default Driverview;
