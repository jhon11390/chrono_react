import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { FaTrashAlt, FaEdit} from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Timers</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
