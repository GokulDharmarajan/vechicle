import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboardstyle.css";
import Textbox from "../../Components/Arun com/Textbox";
import Bigbutton from "../../Components/Arun com/Bigbutton";

function Updatevehicledetails() {
  return (
    <>
      <Container fluid>
        <Row className="dirverresfullc pt-5 pb-5">
          <Col className="mx-auto mt-5 mb-5 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <Textbox
              textname="Vehicle No"
              type="text"
              boxcolor="textboxcolor"
            />
            <Textbox
              textname="Chassis No"
              type="text"
              boxcolor="textboxcolor"
            />
            <Textbox
              textname="Vehicle Model"
              type="text"
              boxcolor="textboxcolor"
            />
            <Textbox
              textname="Owner Name"
              type="text"
              boxcolor="textboxcolor"
            />
            <Textbox
              textname="RC Book No"
              type="text"
              boxcolor="textboxcolor"
            />
            <Textbox
              textname="Insurance Renewal"
              type="text"
              boxcolor="textboxcolor"
            />
            <Col className="pt-4 pb-2 mx-auto text-center">
              <Bigbutton
                buttonname="UPDATE"
                color="bg-success"
                fontcolor="text-light"
                buttonsize="btn-lg"
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Updatevehicledetails;
