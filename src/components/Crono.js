import React from 'react';
import {Row, Col, Card, Button, Alert} from "react-bootstrap";
import { FaTrashAlt, FaEdit} from 'react-icons/fa';


class CronoCard extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.startedOn = 0;
    this.state = {
      color: 'success',
      stateCrono: 'Start',
      seconds: this.props.seconds,
      minutes: this.props.minutes,
      hours: this.props.hours,
      intervalo: -1,
      confirmhour: true
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
                    <h1>{this.state.hours.toString().length < 2 ? `0${this.state.hours}` : this.state.hours}:{this.state.minutes.toString().length < 2 ? `0${this.state.minutes}` : this.state.minutes}:{this.state.seconds.toString().length < 2 ? `0${this.state.seconds}` : this.state.seconds}</h1>
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
              <Button variant={this.state.color} size="lg" block onClick={this.iniciar.bind(this)}>{this.state.stateCrono}</Button>
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
  
  poder(){
    this.setState({
      intervalo: setInterval(() => {
        const maxtime = 59
        this.setState({
          seconds: this.state.seconds === maxtime ? 0 : this.state.seconds + 1, 
          minutes: this.state.seconds === maxtime ?  (this.state.minutes === maxtime ? 0 : this.state.minutes + 1): this.state.minutes,
          hours: this.state.minutes === maxtime ? (this.state.confirmhour ? this.state.hours + 1 : this.state.hours) : this.state.hours,
          confirmhour: this.state.minutes === maxtime ? false : true
        })
      }, 1000)
    })
  }

  iniciar(){
    this.changeColor()
    if(this.state.intervalo === -1){
      this.poder()
    } else {
      clearInterval(this.state.intervalo)
      this.setState({
        intervalo: -1
      })
    }
  }
}

export default CronoCard;