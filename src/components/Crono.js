import React from 'react';
import UpdateCrono from './updateCrono'
import {Row, Col, Card, Button, Alert} from "react-bootstrap";
import { FaTrashAlt, FaEdit} from 'react-icons/fa';


class CronoCard extends React.Component {
  constructor(props) {
    super(props);
    this.changecard= this.changecard.bind(this)
    this.updatecard= this.updatecard.bind(this)
    this.timer = null;
    this.startedOn = 0;
    this.state = {
      color: 'success',
      stateCrono: 'Start',
      title: this.props.title,
      project: this.props.project,
      seconds: this.props.seconds,
      minutes: this.props.minutes,
      hours: this.props.hours,
      intervalo: -1,
      confirmhour: true,
      viewupdate: false
    }
  }

  

  render(){
    if(this.state.viewupdate){
      return (
        <UpdateCrono 
          title= {this.state.title}
          project= {this.state.project}
          changecard= {this.changecard}
          updatecard= {this.updatecard}
        />
      )
    } else {
      return (
	    	<Row className="justify-content-md-center mt-4" >
          <Col md="4">
            <Card>
              <Card.Header>
                <h2>{this.state.title}</h2>
                <p>{this.state.project}</p>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <Row className="text-center">
                    <Col>
                      <h1>{this.state.hours.toString().length < 2 ? `0${this.state.hours}` : this.state.hours}:{this.state.minutes.toString().length < 2 ? `0${this.state.minutes}` : this.state.minutes}:{this.state.seconds.toString().length < 2 ? `0${this.state.seconds}` : this.state.seconds}</h1>
                    </Col>
                  </Row> 
                </Card.Title>
                <Card.Title>
                  <Row>
                    <Col md={{ span: 3, offset: 10}}>
                      <Alert.Link href="#" onClick={this.deletethiscrono.bind(this)}><FaTrashAlt /> </Alert.Link>
                      <Alert.Link href="#" onClick={this.changecard.bind(this, true)}><FaEdit /></Alert.Link>
                    </Col>
                  </Row>
                </Card.Title>
                <Button variant={this.state.color} size="lg" block onClick={this.startcrono.bind(this)}>{this.state.stateCrono}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )
    }
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
  
  timercrono(){
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

  startcrono(){
    this.changeColor()
    if(this.state.intervalo === -1){
      this.timercrono()
    } else {
      clearInterval(this.state.intervalo)
      this.setState({
        intervalo: -1
      })
    }
  }

  changecard(valor){
    this.setState({
      viewupdate: valor
    })
  }

  updatecard(title, project){
    this.setState({
      title: title,
      project: project,
      viewupdate: false
    })
  }
  deletethiscrono(){
    if(this.state.color === "danger"){
      this.startcrono()
    } else {
      clearInterval(this.state.intervalo)
      this.setState({
        intervalo: -1
      })
    }
    this.props.delete(this.props.id)
  }
}

export default CronoCard;