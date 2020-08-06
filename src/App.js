import React from 'react';
import logo from './logo.svg';
import UserForm from './Components/Form'
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Dashboard from './Components/DashBoard'

function App() {
  return (
    <div className="App">
      <Container>
       <Row>
          <Col xs='12' md='12' lg='4' className='mt-2'>
            <UserForm />
          </Col>
          <Col xs='12' md='12' lg='8' className='mt-5 '>
            <Dashboard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
