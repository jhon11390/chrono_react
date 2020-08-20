import React from 'react';
import {Row, Col, Card, Button, Alert} from "react-bootstrap";
import { FaTrashAlt, FaEdit} from 'react-icons/fa';


class CronoCard extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'success',
      stateCrono: 'Start'
    }
  }
  render(){
    return (
	  	<Row className="justify-content-md-center mt-4">
        <Col md="4">
          <Card key={this.props.id}>
            <Card.Header>
              <h2>{this.props.title}</h2>
              <p>{this.props.project}</p>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <Row className="text-center">
                  <Col>
                    <h1>{this.props.time}</h1>
                  </Col>
                </Row> 
              </Card.Title>
              <Card.Text>
                <Row>
                  <Col md={{ span: 2, offset: 10}}>
                    <Alert.Link href="#" onClick={() => this.props.delete(this.props.id)}><FaTrashAlt /> </Alert.Link>
                    <Alert.Link href="#" onClick={() => this.props.update(this.props.id)}><FaEdit /></Alert.Link>
                  </Col>
                </Row>
              </Card.Text>
              <Button variant={this.state.color} size="lg" block onClick={this.changeColor.bind(this)}>{this.state.stateCrono}</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
  changeColor(){
    if(this.state.color === 'success'){
      this.setState({
        color: 'danger',
        stateCrono: 'Stop'
      })
    } else {
      this.setState({
        color: 'success',
        stateCrono: 'Start'
      })
    }
  }

}

export default CronoCard;