import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboardstyle.css";
import Textbox from "../../Components/Arun com/Textbox";
import Bigbutton from "../../Components/Arun com/Bigbutton";

function Addproducts() {
  return (
    <>
      <Container fluid>
        <Row className="dirverresfullc pt-5 pb-5">
          <Col className="mx-auto pt-4 mt-5 mb-5 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <Textbox textname="Name" type="text" boxcolor="textboxcolor" />
            <Textbox textname="Product" type="text" boxcolor="textboxcolor" />
            <Textbox textname="Quantity" type="text" boxcolor="textboxcolor" />
            <Textbox textname="Amount" type="text" boxcolor="textboxcolor" />
            <Textbox textname="Details" type="text" boxcolor="textboxcolor" />
            <Textbox textname="Paid" type="text" boxcolor="textboxcolor" />
            <Col className="pt-5 pb-4 mx-auto text-center">
              <Bigbutton
                buttonname="SUBMIT"
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

export default Addproducts;
