import React from "react";
import "./Componentsstyle.css";
import { Container, Row, Col } from "react-bootstrap";

function Textbox(props) {
  const { textname, type, boxcolor } = props;
  return (
    <>
      <Row className="mt-3 mb-3">
        <Col className="col-5 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xll-3 pt-2 fontsize text-light">
          {textname}
        </Col>
        <Col className="col-1 pt-2">
          <b className="px-2 fontsize text-light">:</b>
        </Col>
        <Col className="col-6 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xll-7">
          <input type={`${type}`} className={`form-control mt-1 ${boxcolor}`} />
        </Col>
      </Row>
    </>
  );
}

export default Textbox;
