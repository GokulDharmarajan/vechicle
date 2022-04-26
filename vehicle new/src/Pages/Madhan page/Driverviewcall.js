import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Driverview from "../../Components/Madhan com/Driverview";
import driverprofileavatar from "../../Components/Madhan com/driverprofileavatar.png";
import "./Madhan.css";

function Driverviewcall() {
  return (
    <Container fluid>
      <Row className="driverprofilebg text-center text-light pt-5 pb-5">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <h3 className="mt-3">All Driver Profile</h3>
        </Col>
        <Row className="mx-auto">
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Driverview imgpath={driverprofileavatar} name="Name & Status" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Driverview imgpath={driverprofileavatar} name="Name & Status" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Driverview imgpath={driverprofileavatar} name="Name & Status" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Driverview imgpath={driverprofileavatar} name="Name & Status" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Driverview imgpath={driverprofileavatar} name="Name & Status" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Driverview imgpath={driverprofileavatar} name="Name & Status" />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Driverviewcall;
