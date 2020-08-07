import React from 'react';
import {Container, Row, Col, Alert} from "react-bootstrap";
import { FaPlus} from 'react-icons/fa';
import Crono from './components/crono'
import './App.css';

function App() {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Timers</h1>
        </Col>
      </Row>
        <Crono />
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Alert.Link href="#"><FaPlus /></Alert.Link>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
