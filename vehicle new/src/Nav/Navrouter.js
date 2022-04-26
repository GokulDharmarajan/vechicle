import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidenav from "./Sidenav";

import Dashboard from "../Pages/Arun page/Dashboard";
import Diverregistration from "../Pages/Arun page/Diverregistration";

import Table3 from "../Pages/Sabi page/Table3";
import Table4 from "../Pages/Sabi page/Table4";
import Table5 from "../Pages/Sabi page/Table5";
import Table6 from "../Pages/Sabi page/Table6";
import Table7 from "../Pages/Sabi page/Table7";
import Table2 from "../Pages/Sabi page/Table2";

import Drivercall from "../Pages/Madhan page/Driverviewcall";
import Addvehicledetails from "../Pages/Arun page/Addvehicledetails";
import Vehicleviewcall from "../Pages/Madhan page/Vehicleviewcall";
import Updatevehicledetails from "../Pages/Arun page/Updatevehicledetails";

import Addtrip from "../Pages/Gokul page/Addtrip";
import Updatetrip from "../Pages/Gokul page/Updatetrip";

import Repairmantenance from "../Pages/Arun page/Repairmantenance";

import Addvendor from "../Pages/Arun page/Addvendor";
import Addproducts from "../Pages/Arun page/Addproducts";

function Navrouter() {
  return (
    <>
      <Router>
        <Sidenav />

        <Routes>
          <Route path="/" exact element={<Dashboard />} />

          <Route path="/AddDiverDetails" element={<Diverregistration />} />
          <Route path="/ViewDiverDetails" element={<Drivercall />} />
          <Route path="/UpdateDiverDetails" element={<Table3 />} />

          <Route path="/AddVehicleDetails" element={<Addvehicledetails />} />
          <Route path="/ViewVehicleDetails" element={<Vehicleviewcall />} />
          <Route
            path="/UpdateVehicleDetails"
            element={<Updatevehicledetails />}
          />

          <Route path="/AddTrip" element={<Addtrip />} />
          <Route path="/UpdateTrip" element={<Updatetrip />} />
          <Route path="/ViewTrip" element={<Table4 />} />
          <Route path="/TripExpenses" element={<Table5 />} />
          <Route path="/TripIncome" element={<Table2 />} />

          {/* Not in Modules */}
          {/* <Route path="/FuelDetails" element={<Vehicleviewcall />} />
          <Route path="/BlueOilDetails" element={<Vehicleviewcall />} />
          <Route path="/ServiceDetails" element={<Vehicleviewcall />} />
          <Route path="/TyreDetails" element={<Vehicleviewcall />} /> */}

          <Route path="/Repair&Maintensance" element={<Repairmantenance />} />

          <Route path="/AddProducts" element={<Addproducts />} />
          <Route path="/AddVendor" element={<Addvendor />} />
          <Route path="/ViewVendor" element={<Table6 />} />

          <Route path="/OverallReports" element={<Table7 />} />

          {/* Not in Modules */}
          {/* <Route path="/FleetManagment" element={<Table7 />} />
          <Route path="/FleetTripManagment" element={<Table7 />} />
          <Route path="/FleetViewTrip" element={<Table7 />} /> */}

          {/* Not in Modules */}
          {/* <Route path="/FuelManagment" element={<Table7 />} />
          <Route path="/SalaryManagment" element={<Table7 />} />
          <Route path="/Sales" element={<Table7 />} /> */}

          <Route element={Dashboard} />
        </Routes>
      </Router>
    </>
  );
}

export default Navrouter;
