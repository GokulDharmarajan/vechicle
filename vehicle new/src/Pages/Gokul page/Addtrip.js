import React from "react";
import "../../Components/Gokul com/Menu.css";
import { Container, Row, Col } from "react-bootstrap";
import Textbox from "../../Components/Arun com/Textbox";
import Bigbutton from "../../Components/Arun com/Bigbutton";

function Addtrip() {
  return (
    <>
      <Container fluid className="bgcolor">
        <Row className="mx-auto pt-5 pb-5">
          <Col
            className="pt-5 mx-auto"
            xs={12}
            sm={12}
            md={7}
            lg={6}
            xl={6}
            xxl={6}
          >
            <Col className="pt-1">
              <Textbox
                textname="Place From"
                type="text"
                boxcolor="textboxcolor"
              />
            </Col>
            <Col className="pt-1">
              <Textbox
                textname="Date From"
                type="text"
                boxcolor="textboxcolor"
              />
            </Col>
            <Col className="pt-1">
              <Textbox
                textname="Vehicle No"
                type="text"
                boxcolor="textboxcolor"
              />
            </Col>
            <Col className="pt-1">
              <Textbox
                textname="Client Name"
                type="text"
                boxcolor="textboxcolor"
              />
            </Col>
            <Col className="pt-1">
              <Textbox
                textname="Client Details"
                type="text"
                boxcolor="textboxcolor"
              />
            </Col>
          </Col>
          <Col
            className="pt-5 mx-auto"
            xs={12}
            sm={12}
            md={7}
            lg={6}
            xl={6}
            xxl={6}
          >
            <Col className="pt-1">
              <Textbox textname="To" type="text" boxcolor="textboxcolor" />
            </Col>
            <Col className="pt-1">
              <Textbox textname="To" type="text" boxcolor="textboxcolor" />
            </Col>
            <Col className="pt-1">
              <Textbox textname="Driver1" type="text" boxcolor="textboxcolor" />
            </Col>
            <Col className="pt-1">
              <Textbox textname="Driver2" type="text" boxcolor="textboxcolor" />
            </Col>
            <Col className="pt-1">
              <Textbox textname="Amount" type="text" boxcolor="textboxcolor" />
            </Col>
          </Col>
          <Col className="mx-auto text-center mt-5 mb-3 col-12">
            <Bigbutton
              buttonname="SUBMIT"
              color="bg-primary"
              fontcolor="text-light"
              buttonsize="btn-lg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Addtrip;
