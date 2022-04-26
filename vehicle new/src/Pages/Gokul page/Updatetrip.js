import React from "react";
import "../../Components/Gokul com/Menu.css";
import { Container, Row, Col } from "react-bootstrap";
import Textbox from "../../Components/Arun com/Textbox";
import Bigbutton from "../../Components/Arun com/Bigbutton";

function Updatetrip() {
  return (
    <>
      <Container fluid>
        <Row className="bgcolor pt-4 pb-4">
          <Row>
            <Col className="col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ps-5 mx-auto">
              <Textbox textname="Trip No" type="text" boxcolor="textboxcolor" />
            </Col>
            <Col className="col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pt-3 pb-3 text-center mx-auto">
              <Row className="col-lg-8 mx-auto text-center">
                <Col className="col-lg-6 mx-auto">
                  <Bigbutton
                    buttonname="CHANGE"
                    color="bg-primary"
                    fontcolor="text-light"
                    buttonsize="btn-lg"
                  />
                </Col>
                <Col className="col-lg-6 mx-auto">
                  <Bigbutton
                    buttonname="UPDATE"
                    color="bg-primary"
                    fontcolor="text-light"
                    buttonsize="btn-lg"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Col
            className="text-center mx-auto"
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
          >
            <Col className="rounded bgcolor1 pt-3 pb-3 mt-3 ps-2">
              <h4 className="text-light">CLIENT</h4>
              <Col className="me-3">
                <Textbox
                  textname="Income Total"
                  type="text"
                  boxcolor="textboxcolor1"
                />
              </Col>
              <Col className="me-3">
                <Textbox textname="Paid" type="text" boxcolor="textboxcolor1" />
              </Col>
              <Col className="me-3">
                <Textbox
                  textname="Balance"
                  type="text"
                  boxcolor="textboxcolor1"
                />
              </Col>
              <Col className="mx-auto pt-4 pb-2">
                <Bigbutton
                  buttonname="SUBMIT"
                  color="bg-primary"
                  fontcolor="text-light"
                  buttonsize="btn-lg"
                />
              </Col>
            </Col>
          </Col>
          <Col
            className="text-center mx-auto"
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
          >
            <Col className="rounded bgcolor1 pt-3 pb-3 mt-3 ps-2">
              <h4 className="text-light">DRIVER</h4>
              <Col className="me-3">
                <Textbox
                  textname="Driver Time"
                  type="text"
                  boxcolor="textboxcolor1"
                />
              </Col>
              <Col className="me-3">
                <Textbox
                  textname="Amount"
                  type="text"
                  boxcolor="textboxcolor1"
                />
              </Col>
              <Row className="ps-2">
                <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <Col className="me-3">
                    <Textbox
                      textname="Paid"
                      type="text"
                      boxcolor="textboxcolor1"
                    />
                  </Col>
                </Col>
                <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <Col className="me-3">
                    <Textbox
                      textname="Balance"
                      type="text"
                      boxcolor="textboxcolor1"
                    />
                  </Col>
                </Col>
              </Row>
              <Col className="mx-auto pt-2 pb-2">
                <Bigbutton
                  buttonname="SUBMIT"
                  color="bg-primary"
                  fontcolor="text-light"
                  buttonsize="btn-lg"
                />
              </Col>
            </Col>
          </Col>
          <Col
            className="text-center mx-auto"
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
          >
            <Col className="rounded bgcolor1 pt-3 pb-3 mt-3 ps-2">
              <h4 className="text-light">Vehicle</h4>
              <Col className="me-3">
                <Textbox
                  textname="Vehicle No"
                  type="text"
                  boxcolor="textboxcolor1"
                />
              </Col>
              <Col className="me-3">
                <Textbox
                  textname="Amount"
                  type="text"
                  boxcolor="textboxcolor1"
                />
              </Col>
              <Col className="me-3">
                <Textbox
                  textname="Details"
                  type="text"
                  boxcolor="textboxcolor1"
                />
              </Col>
              <Col className="mx-auto pt-1 pb-1">
                <Bigbutton
                  buttonname="SUBMIT"
                  color="bg-primary"
                  fontcolor="text-light"
                  buttonsize="btn-lg"
                />
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Updatetrip;
