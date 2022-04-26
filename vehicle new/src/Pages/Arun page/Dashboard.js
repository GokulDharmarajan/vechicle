import React from "react";
import "../Arun page/Dashboardstyle.css";
import { Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row className="dashboardfullc rounded pt-5 pb-3">
          <Col
            className="mx-auto pt-1 pb-2 text-center"
            xs={12}
            sm={12}
            md={9}
            lg={8}
            xl={8}
            xll={8}
          >
            <Col className="dashdiv1color pt-5">
              i
              <Col
                className="mx-auto mt-5 pt-5 text-center"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                xll={12}
              >
                <Col className="dashdiv3color mt-5"></Col>
              </Col>
            </Col>
          </Col>
          <Col
            className="mx-auto pt-1 pb-2 text-center"
            sm={12}
            md={9}
            lg={4}
            xl={4}
            xll={4}
          >
            <Col className="dashdiv2color"></Col>
          </Col>
          <Row className="mx-auto pb-2 pt-1">
            <Col
              className="mx-auto pt-2 text-center"
              sm={12}
              md={9}
              lg={7}
              xl={7}
              xll={7}
            >
              <Col className="dashdiv4color"></Col>
            </Col>
            <Col
              className="mx-auto pt-2 text-center"
              sm={12}
              md={9}
              lg={5}
              xl={5}
              xll={5}
            >
              <Col className="dashdiv5color pt-5">
                <Col
                  className="mx-auto text-center pt-5"
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  xll={12}
                >
                  <Col className="dashdiv6color mt-5"></Col>
                </Col>
              </Col>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
