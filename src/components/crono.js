import React from 'react';
import {Row, Col, Card, Button, Alert} from "react-bootstrap";
import { FaTrashAlt, FaEdit} from 'react-icons/fa';

function Crono() {
  return (
		<Row className="justify-content-md-center mt-4">
      <Col md="4">
        <Card>
          <Card.Header>
            <h2>Titulo</h2>
            <p>Subtitulo</p>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <Row className="text-center">
                <Col>
                  <h1>00:00:00</h1>
                </Col>
              </Row> 
            </Card.Title>
            <Card.Text>
              <Row>
                <Col md={{ span: 2, offset: 10}}>
                  <Alert.Link href="#"><FaTrashAlt /> </Alert.Link>
                  <Alert.Link href="#"><FaEdit /></Alert.Link>
                </Col>
              </Row>
            </Card.Text>
            <Button variant="primary" size="lg" block>Start</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Crono;