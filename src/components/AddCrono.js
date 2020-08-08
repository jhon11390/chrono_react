import React from 'react';
import {Row, Col, Alert} from "react-bootstrap";
import { FaPlus} from 'react-icons/fa';

class AddCrono extends React.Component {
  
  render(){
    return (
      <Row className="justify-content-md-center mt-4">
        <Col md="auto">
          <Alert.Link href="#"><FaPlus /></Alert.Link>
        </Col>
      </Row>
    )
  }  
}

export default AddCrono;