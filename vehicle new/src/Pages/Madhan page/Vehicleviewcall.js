import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Vehicleview from "../../Components/Madhan com/Vehicleview";
import vechicleprofileavatar from "../../Components/Madhan com/vechicleprofileavatar.png";
import "./Madhan.css";

function Vehicleviewcall() {
  return (
    <Container fluid>
      <Row className="driverprofilebg pt-3 pb-4">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <h3 className="mt-5 mb-3 text-center text-light">
            All Vechicle Profile
          </h3>
        </Col>
        <Row classname="mx-auto">
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Vehicleview
              imgpath={vechicleprofileavatar}
              vehiclename="Vehicle No & Status"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Vehicleview
              imgpath={vechicleprofileavatar}
              vehiclename="Vehicle No & Status"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Vehicleview
              imgpath={vechicleprofileavatar}
              vehiclename="Vehicle No & Status"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Vehicleview
              imgpath={vechicleprofileavatar}
              vehiclename="Vehicle No & Status"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Vehicleview
              imgpath={vechicleprofileavatar}
              vehiclename="Vehicle No & Status"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Vehicleview
              imgpath={vechicleprofileavatar}
              vehiclename="Vehicle No & Status"
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Vehicleviewcall;
