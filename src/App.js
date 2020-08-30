import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import CronoCard from './components/Crono'
import FormCrono from './components/FormCrono'
import Data from './components/Data'
import AddCrono from './components/AddCrono'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.hide_form= this.hide_form.bind(this)
    this.show_form= this.show_form.bind(this)
    this.handlekeypress= this.handlekeypress.bind(this)
    this.deleteCrono= this.deleteCrono.bind(this)
    this.state = {
      data: Data,
      title: '',
      project: '',
      form_crono: false,
      number: 3
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
          {this.state.data.map((date, i)=> {
            return (
              <CronoCard 
                key = {date.id}
                id= {i}
                title= {date.title}
                project= {date.project}
                time= {date.time}
                seconds= {date.seconds}
                minutes= {date.minutes}
                hours= {date.hours}
                delete= {this.deleteCrono}
                data= {this.state.data}
              />
            )
          })}
        {this.state.form_crono ? <FormCrono cancelar= {this.hide_form} crear={this.handlekeypress} title={this.state.title} project={this.state.project} handle={this.handleChange}/> : <div></div>}
        
        <br/>
        <AddCrono addcrono= {this.show_form}/>
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
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handlekeypress(e) {
    e.preventDefault()
    this.setState({
      data: this.state.data.concat({id: this.state.number, title: this.state.title, project: this.state.project, time: "00:00:00", seconds: 0, minutes: 0, hours: 0}),
      form_crono: false,
      title: '',
      project: '',
      number: this.state.number + 1
    })
  }
  
  deleteCrono(id) {
    const data = this.state.data
    const index = id
    this.setState({
      data: data.filter((date, i) =>
        index !== i
      )
    })
  }
}

export default App;
