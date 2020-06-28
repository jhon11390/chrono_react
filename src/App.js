import React from 'react';
import {Container, Row, Col, Card, Button, Alert} from "react-bootstrap";
import { FaTrashAlt, FaEdit, FaPlus} from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Timers</h1>
        </Col>
      </Row>
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
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Alert.Link href="#"><FaPlus /></Alert.Link>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
