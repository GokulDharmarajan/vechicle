import React from "react";
import "./Sidenavstyle.css";
import { NavLink, Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
import { NavDropdown } from "react-bootstrap";
// icons
import { BsFillBarChartLineFill } from "react-icons/bs";
import {
  MdSwitchAccount,
  MdDirectionsBusFilled,
  MdElectricRickshaw,
  MdDirectionsCarFilled,
  MdOutlineBuildCircle,
  MdOutlineLocalGroceryStore,
  MdOutlineStorefront,
  MdReduceCapacity,
  MdVolunteerActivism,
} from "react-icons/md";
import { GiFuelTank } from "react-icons/gi";
import { SiSalesforce } from "react-icons/si";

function Sidenav() {
  return (
    <>
      <div className="side-nav">
        <input type="checkbox" id="menu" />
        <label className="icon" htmlFor="menu">
          <div className="menu"></div>
        </label>
        <nav>
          <ul>
            <NavLink exact={true} to="/">
              <li className="px-2">
                <BsFillBarChartLineFill
                  className="icons pt-1"
                  size={46}
                ></BsFillBarChartLineFill>
                <div className="menu-text normalnav">Dashboard</div>
              </li>
            </NavLink>

            <li className="px-2">
              <MdSwitchAccount
                className="icons pt-1"
                size={47}
              ></MdSwitchAccount>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Driver"
                  menuVariant="dark"
                >
                  <ul>
                    <Link to="/AddDiverDetails">
                      <li className="text-light drophover">
                        Add Diver Details
                      </li>
                    </Link>
                    <Link to="/ViewDiverDetails">
                      <li className="text-light drophover">
                        View Diver Details
                      </li>
                    </Link>
                    <Link to="/UpdateDiverDetails">
                      <li className="text-light drophover">
                        Update Diver Details
                      </li>
                    </Link>
                  </ul>
                </NavDropdown>
              </div>
            </li>

            <li className="px-2">
              <MdDirectionsBusFilled
                className="icons pt-1"
                size={47}
              ></MdDirectionsBusFilled>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Vehicle"
                  menuVariant="dark"
                >
                  <ul>
                    <Link to="/AddVehicleDetails">
                      <li className="text-light drophover">
                        Add Vehicle Details
                      </li>
                    </Link>
                    <Link to="/ViewVehicleDetails">
                      <li className="text-light drophover">
                        View Vehicle Details
                      </li>
                    </Link>
                    <Link to="/UpdateVehicleDetails">
                      <li className="text-light drophover">
                        Update Vehicle Details
                      </li>
                    </Link>
                  </ul>
                </NavDropdown>
              </div>
            </li>

            <li className="px-2">
              <MdElectricRickshaw
                className="icons pt-1"
                size={47}
              ></MdElectricRickshaw>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Trip Details"
                  menuVariant="dark"
                >
                  <ul>
                    <Link to="/AddTrip">
                      <li className="text-light drophover">Add Trip</li>
                    </Link>
                    <Link to="/UpdateTrip">
                      <li className="text-light drophover">Update Trip</li>
                    </Link>
                    <Link to="/ViewTrip">
                      <li className="text-light drophover">View Trip</li>
                    </Link>
                    <Link to="/TripExpenses">
                      <li className="text-light drophover">Trip Expenses</li>
                    </Link>
                    <Link to="/TripIncome">
                      <li className="text-light drophover">Trip Income</li>
                    </Link>
                  </ul>
                </NavDropdown>
              </div>
            </li>

            <li className="px-2">
              <MdDirectionsCarFilled
                className="icons pt-1"
                size={47}
              ></MdDirectionsCarFilled>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Vehicle Details"
                  menuVariant="dark"
                >
                  <ul>
                    <Link to="/FuelDetails">
                      <li className="text-light drophover">Fuel Details</li>
                    </Link>
                    <Link to="/BlueOilDetails">
                      <li className="text-light drophover">BlueOil Details</li>
                    </Link>
                    <Link to="/ServiceDetails">
                      <li className="text-light drophover">Service Details</li>
                    </Link>
                    <Link to="/TyreDetails">
                      <li className="text-light drophover">Tyre Details</li>
                    </Link>
                  </ul>
                </NavDropdown>
              </div>
            </li>

            <NavLink to="/Repair&Maintensance">
              <li className="px-2">
                <MdOutlineBuildCircle
                  className="icons pt-1"
                  size={47}
                ></MdOutlineBuildCircle>
                <div className="menu-text normalnav">Repair & Maintensance</div>
              </li>
            </NavLink>

            <li className="px-2">
              <MdOutlineLocalGroceryStore
                className="icons pt-1"
                size={47}
              ></MdOutlineLocalGroceryStore>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Purchase"
                  menuVariant="dark"
                >
                  <ul>
                    <Link to="/AddProducts">
                      <li className="text-light drophover">Add Products</li>
                    </Link>
                    <Link to="/AddVendor">
                      <li className="text-light drophover">Add Vendor</li>
                    </Link>
                    <Link to="/ViewVendor">
                      <li className="text-light drophover">View Vendor</li>
                    </Link>
                  </ul>
                </NavDropdown>
              </div>
            </li>

            <NavLink to="/OverallReports">
              <li className="px-2">
                <MdOutlineStorefront
                  className="icons"
                  size={43}
                ></MdOutlineStorefront>
                <div className="menu-text normalnav">Overall Reports</div>
              </li>
            </NavLink>

            <li className="px-2">
              <MdReduceCapacity className="icons" size={43}></MdReduceCapacity>
              <div className="menu-text">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Fleet Managment"
                  menuVariant="dark"
                >
                  <ul>
                    <Link to="/FleetTripManagment">
                      <li className="text-light drophover">Trip Managment</li>
                    </Link>
                    <Link to="/FleetViewTrip">
                      <li className="text-light drophover">View Trip</li>
                    </Link>
                  </ul>
                </NavDropdown>
              </div>
            </li>

            <NavLink to="/FuelManagment">
              <li className="px-2">
                <GiFuelTank className="icons" size={43}></GiFuelTank>
                <div className="menu-text normalnav">Fuel Managment</div>
              </li>
            </NavLink>

            <NavLink to="/SalaryManagment">
              <li className="px-2">
                <MdVolunteerActivism
                  className="icons"
                  size={43}
                ></MdVolunteerActivism>
                <div className="menu-text normalnav">Salary Managment</div>
              </li>
            </NavLink>

            <NavLink to="/Sales">
              <li className="px-2">
                <SiSalesforce className="icons" size={43}></SiSalesforce>
                <div className="menu-text normalnav">Sales</div>
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidenav;
