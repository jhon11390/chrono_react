import React from 'react';
import {Row, Col, Form, Button} from "react-bootstrap";

class UpdateCrono extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: this.props.title,
          project: this.props.project
        }
      }
  render(){
    return (
      <Row className="justify-content-md-center mt-4">
        <Col md="4">
          <Form>
            <Row className="justify-content-md-center mt-4">
              <Col md="auto">
                <h4>Edit Timer</h4>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Titulo" name="title" onChange={this.handleChangeUpdate.bind(this)} value={this.state.title}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Project</Form.Label>
              <Form.Control type="text" placeholder="Nombre del proyecto" name="project" onChange={this.handleChangeUpdate.bind(this)} value={this.state.project}/>
            </Form.Group>
            <Row>
              <Col md="6">
                <Button variant="primary" type="submit" size="lg" block  onClick={() => this.props.updatecard(this.state.title, this.state.project)}>
                  Update
                </Button>
              </Col>
              <Col md="6">
                <Button variant="danger" type="submit" size="lg" block onClick={() => this.props.changecard(false)}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }

  handleChangeUpdate = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
}

export default UpdateCrono;