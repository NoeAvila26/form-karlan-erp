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
    // console.log(event.target.value)
    // console.log(event.target.name)
    let property = event.target.name;
    let value = event.target.value;
    this.setState({ [property]: value });
  }

  onSubmitHandler() {
    const { name, enterprise, mail, product, status } = this.state;
    // console.log(name);
    // console.log(enterprise);
    // console.log(mail);
    // console.log(product);
    let userObject = { name, enterprise, mail, product, status };
    console.log(userObject);
    const userRef = firebase.database().ref('/users')
    userRef.push(userObject)
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
            <input className = 'w-100' name="name" onChange={this.onChangeHandler}></input>
          </FormGroup>
          <FormGroup>
            <label>Empresa</label>
            <input className = 'w-100' name="enterprise" onChange={this.onChangeHandler}></input>
          </FormGroup>
          <FormGroup>
            <label>Correo</label>
            <input name="mail" onChange={this.onChangeHandler}></input>
          </FormGroup>
          <FormGroup>
            <Label>Producto</Label>
            <Input type="select" name="product" onChange={this.onChangeHandler}>
              <option>Desinfectante</option>
              <option>Papel higienico</option>
              <option>Dispensadores</option>
              <option>Dispensadores</option>
              <option>UHF</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Cotizacion</Label>
            <Input type="select" name="status" onChange={this.onChangeHandler}>
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
