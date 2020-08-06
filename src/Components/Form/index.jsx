import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//importamos firebase

import firebase from '../../Services/firebase'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      enterprise: "",
      mail: "",
      product:"",
      status:""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    let property = event.target.name;
    let value = event.target.value;
    this.setState({ [property]: value });
  }

  onSubmitHandler() {
    const { name, enterprise, mail, product, status } = this.state;
    let userObject = { name, enterprise, mail, product, status };
    // console.log(userObject);
    const userRef = firebase.database().ref('/users')
    userRef.push(userObject)
    this.setState({name:"", enterprise:"", mail:"", product:"", status:""})
  }

  componentDidMount() {
    const userRef = firebase.database().ref('/users')
    userRef.on('value', snapshot => {
      console.log('snapshot', snapshot.val() )
    })
  }

  render() {
    return (
      <row>
        <Form className="border border-secondary rounded p-3 mt-5 ">
          <FormGroup>
            <label className='' >Nombre</label>
            <input className = 'w-100' name="name" value={this.state.name} onChange={this.onChangeHandler}></input>
          </FormGroup>
          <FormGroup>
            <label>Empresa</label>
            <input className = 'w-100' name="enterprise" value={this.state.enterprise} onChange={this.onChangeHandler}></input>
          </FormGroup>
          <FormGroup>
            <label>Correo</label>
            <input  className = 'w-100' name="mail" value={this.state.mail} onChange={this.onChangeHandler}></input>
          </FormGroup>
          <FormGroup>
            <Label>Producto</Label>
            <Input type="select" name="product" value={this.state.product} onChange={this.onChangeHandler}>
              <option>Desinfectante</option>
              <option>Papel higienico</option>
              <option>Dispensadores</option>
              <option>Dispensadores</option>
              <option>UHF</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Cotizacion</Label>
            <Input type="select" name="status" value={this.state.status} onChange={this.onChangeHandler}>
              <option>Enviada</option>
              <option>No Enviada</option>
              
            </Input>
          </FormGroup>
          <Button className="btn btn-success" onClick={this.onSubmitHandler}>
            Guardar
          </Button>
        </Form>
      </row>
    );
  }
}

export default UserForm;
