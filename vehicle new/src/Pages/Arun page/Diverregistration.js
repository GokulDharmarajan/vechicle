import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Components/Arun com/Componentsstyle.css";
import Textbox from "../../Components/Arun com/Textbox";
import Bigbutton from "../../Components/Arun com/Bigbutton";

function Diverregistration() {
  return (
    <>
      <Container fluid>
        <Row className="dirverresfullc pt-5 pb-5">
          <Col className="mx-auto col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <Textbox
              textname="Photo Upload"
              type="file"
              boxcolor="textboxcolor"
            />
            <Textbox
              textname="Driver Name"
              type="text"
              boxcolor="textboxcolor"
            />
            <Textbox textname="DOB" type="date" boxcolor="textboxcolor" />
            <Textbox textname="Address" type="text" boxcolor="textboxcolor" />
            <Textbox textname="Mobile No" type="text" boxcolor="textboxcolor" />
            <Textbox
              textname="Address No"
              type="text"
              boxcolor="textboxcolor"
            />
            <Textbox
              textname="Licence No & Date"
              type="text"
              boxcolor="textboxcolor"
            />
            <Textbox
              textname="Experience"
              type="text"
              boxcolor="textboxcolor"
            />
            <Col className="pt-4 pb-2 mx-auto text-center">
              <Bigbutton
                buttonname="REGISTER"
                color="bg-primary"
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

export default Diverregistration;
