import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "../../Components/Sabi com/Table.css";

function Table6() {
  return (
    <Container fluid>
      <Row className="background pt-3 pb-5">
        <Col
          className="b1 mb-3 mx-auto"
          xs={12}
          sm={12}
          md={8}
          xl={8}
          lg={8}
          xxl={8}
        >
          <Table
            striped
            bordered
            hover
            responsive="sm md"
            className="Table text-light mt-5"
          >
            <thead>
              <tr>
                <th>S No</th>
                <th>Name </th>
                <th>Contact</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody className="text-light">
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Table6;
