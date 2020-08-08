import React from 'react';
import {Container, Row, Col, Alert} from "react-bootstrap";
import CronoCard from './components/Crono'
import FormCrono from './components/FormCrono'
import Data from './components/Data'
import { FaPlus} from 'react-icons/fa';
import AddCrono from './components/AddCrono'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.hide_form= this.hide_form.bind(this)
    this.state = {
      data: Data,
      form_crono: false
    }
  }
  render() {
    return (
      <Container fluid className="mt-4">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>Timers</h1>
          </Col>
        </Row>
          {this.state.data.map((date)=> {
            return (
              <CronoCard 
                title= {date.title}
                project= {date.project}
                time= {date.time}
              />
            )
          })}
        {this.state.form_crono ? <FormCrono cancelar= {this.hide_form}/> : <div></div>}
        
        <br/>
        <Row className="justify-content-md-center mt-4">
          <Col md="auto">
            <Alert.Link href="#" onClick={this.show_form.bind(this)}><FaPlus /></Alert.Link>
          </Col>
        </Row>
        <br/>
      </Container>
    );
  }

  show_form(){
    this.setState({
      form_crono: true
    })
  }
  hide_form(){
    this.setState({
      form_crono: false
    })
  }
}

export default App;
