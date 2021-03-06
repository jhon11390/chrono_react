import React from 'react';
import {Row, Col, Form, Button} from "react-bootstrap";

class FormCrono extends React.Component {

  render(){
    return (
      <Row className="justify-content-md-center mt-4">
        <Col md="4">
          <Form>
            <Row className="justify-content-md-center mt-4">
              <Col md="auto">
                <h4>New Timer</h4>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Titulo" name="title" onChange={this.props.handle} value={this.props.title}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Project</Form.Label>
              <Form.Control type="text" placeholder="Nombre del proyecto" name="project" onChange={this.props.handle} value={this.props.project}/>
            </Form.Group>
            <Row>
              <Col md="6">
                <Button variant="success"  size="lg" block onClick={this.props.crear}>
                  Create
                </Button>
              </Col>
              <Col md="6">
                <Button variant="danger"  size="lg" block onClick={this.props.cancelar}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default FormCrono;