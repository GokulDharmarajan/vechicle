import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./Table.css";

function Table1(props) {
  const { name, name1, name2, name3, name4, name5, name6, name7 } = props;
  return (
    <Container fluid>
      <Row className="background pt-3 pb-5">
        <Col
          className="b1 mb-3"
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
                <th>{name}</th>
                <th>{name1}</th>
                <th>{name2}</th>
                <th>{name3}</th>
                <th>{name4}</th>
                <th>{name5}</th>
                <th>{name6}</th>
                <th>{name7}</th>
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
                <td className="text-light">8</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
                <td className="text-light">8</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
                <td className="text-light">8</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
                <td className="text-light">8</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
                <td className="text-light">8</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
                <td className="text-light">8</td>
              </tr>

              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
                <td className="text-light">8</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
                <td className="text-light">8</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
                <td className="text-light">8</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
                <td className="text-light">8</td>
              </tr>
              <tr>
                <td className="text-light">1</td>
                <td className="text-light">2</td>
                <td className="text-light">3</td>
                <td className="text-light">4</td>
                <td className="text-light">5</td>
                <td className="text-light">6</td>
                <td className="text-light">7</td>
                <td className="text-light">8</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Table1;
