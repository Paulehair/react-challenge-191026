import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../../utils/API";

export class Signup extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: ""
  };
  send = async () => {
    const { 
      firstname, lastname, email, password, cpassword } = this.state;
    if (!firstname || firstname.length === 0) return;
    if (!lastname || lastname.length === 0) return;
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({ firstname, lastname, email, password });
      localStorage.setItem("token", data.token);
      window.location = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    const { firstname, lastname, email, password, cpassword } = this.state;
    return (
      <div className="Login">
        <FormGroup controlId="firstname" bssize="large">
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={firstname}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="lastname" bssize="large">
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            value={lastname}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email" bssize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="cpassword" bssize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={cpassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button onClick={this.send} block bssize="large" type="submit">
          Inscription
        </Button>
      </div>
    );
  }
}