import React from "react";

function Vehicleview(props) {
  const { imgpath, vehiclename } = props;

  return (
    <>
      <div className="driverprofilebg pt-3 pb-2 text-center">
        <div className="driverprofile mt-4 mb-4 pt-4 pb-4">
          <img src={imgpath} className="" height="100" width="100" alt="" />
          <h5 className="mt-3 mb-2 text-light">{vehiclename}</h5>
        </div>
      </div>
    </>
  );
}

export default Vehicleview;
