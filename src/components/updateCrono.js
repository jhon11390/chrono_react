import React from 'react';
import {Row, Col, Form, Button} from "react-bootstrap";

class UpdateCrono extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: this.props.title,
          project: this.props.project,
          data: this.props.data,
          indice: this.props.indice
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
                <Button variant="primary" type="submit" size="lg" block onClick={this.handlekeypressUpdate.bind(this)} >
                  Update
                </Button>
              </Col>
              <Col md="6">
                <Button variant="danger" type="submit" size="lg" block onClick={this.props.cancelar}>
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
  handlekeypressUpdate(e) {
    e.preventDefault()
    const subindiceupdate = this.state.data[this.state.indice]
    subindiceupdate.title = this.state.title
    subindiceupdate.project = this.state.project
    this.setState({
      data: this.state.data.map((date, i) => 
        i === this.state.indice ? subindiceupdate : date
      )
    })
    this.props.cancelar();
  }
}

export default UpdateCrono;