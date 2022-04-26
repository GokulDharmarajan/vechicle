import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "../../Components/Sabi com/Table.css";

function Table5() {
  return (
    <Container fluid>
      <Row className="background pt-3 pb-5">
        <Col
          className="b1 mb-3 "
          xs={12}
          sm={12}
          md={12}
          xl={12}
          lg={12}
          xxl={12}
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
                <th>Trip No </th>
                <th>From Place</th>
                <th>To Place</th>
                <th>Client Name</th>
                <th>Expense</th>
                <th>Expense Details</th>
              </tr>
            </thead>

            <tbody className="text-light">
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Table5;
