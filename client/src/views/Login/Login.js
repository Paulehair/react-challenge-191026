import React, { Component, Fragment } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import API from "../../utils/API";
import "./Login.scss";
import leMonsieur from "../../assets/images/le-monsieur-in-the-sky-yeee.png"
import leMonsieur2 from "../../assets/images/le-monsieur-solide-sur-ses-appuis.png"
import logo from "../../assets/images/LOGO.png"
import { connect } from "react-redux";

class Login extends Component {

  constructor(props) {
    super(props);
      this.state = {
        email: "",
        password: "",
        pwdVisibility: "password"
      }
      this.role = 'user'
  }

  send = async () => {
    const { email, password } = this.state;
    if (!email || email.length === 0) {
      return;
    }
    if (!password || password.length === 0) {
      return;
    }
    try {
        const test = await API.login(email, password, this.role);
        // window.location = '/dashboard'
        this.props.onLogin()

    } catch(err) {
        //TODO: ERROR FEEDBACK
    }
    
  };
  
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  onSwitchChange = () => {
    this.props.set_checked(!this.props.isChecked)
    this.role = this.props.isChecked == true ? 'user' : 'superadmin'
  }

  changeTextColor() {
    //Utiliser redux pour le changement de couleur au passage de la variable a true
    if (this.props.isChecked === true) {
      /* Background color */
      document.querySelector('.App').style.backgroundColor = "#0B8EDC"
       
    } else {
      /* Background color */
      document.querySelector('.App').style.backgroundColor = "#F7774A"
    }
  }

  changePwdVisibility = () => {    
    if (this.state.pwdVisibility === "password") {
        this.setState(() => ({
          pwdVisibility: "text",
        }));
    } else {
        this.setState(() => ({
          pwdVisibility: "password",
        }));
    }
  }

  componentDidUpdate() {
    this.changeTextColor()
  }

  render() {
    const { email, password} = this.state;
    let isChecked = this.props.isChecked
    return (
      <Fragment>
      {
        !isChecked ?         
        <img className="le-monsieur" src={leMonsieur} alt="le monsieur in the sky yeee"></img>
        :
        <img className="le-monsieur2" src={leMonsieur2} alt="le monsieur solide sur ses appuis"></img>
      }
        <div className="main-container">
          <div className="auth-container">
            <div className="logo-container">
              <img src={logo} alt="logo"></img>
            </div>
            <p className="title">Se connecter</p>
            <div className="switch-user">
              <span id="student-color" style={{color: !isChecked ?  "#FFFFFF" : "#F2F2F2", opacity: !isChecked ? "1" : "0.7"}}>Étudiant</span>
              <div className="switch__container">
                <input onChange={this.onSwitchChange} id="switch-flat" className={`switch switch--flat ${this.props.isChecked === false ? 'student' : 'teacher' }`} type="checkbox"/>
                <label className={`${this.props.isChecked === false ? 'student' : 'teacher' }`} htmlFor="switch-flat"></label>
              </div>
              <span id="teacher-color" style={{color: !isChecked ?  "#F2F2F2" : "#FFFFFF", opacity: !isChecked ? "0.7" : "1"}}>Intervenant</span>
            </div>
            <div className="login-container">
              <div className="formGroup-container">
                <FormGroup className="formGroup" controlId="email" bssize="large">
                  <FormControl
                    className="inputField"
                    placeholder = "Email"
                    autoFocus
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup controlId="password" bssize="large" className="pwd-formGroup">
                  <FormControl
                    className="inputField inputField-pwd"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                    type={this.state.pwdVisibility}
                  />
                  <button onClick={this.changePwdVisibility} type="button" className={`password-visibility ${this.state.pwdVisibility === "password" ? 'invisible' : 'visible' }`} style={{'animationDelay': '0.1s'}}></button>
                </FormGroup>
              </div>
              <Button className="submit-btn" onClick={this.send} block bssize="large" type="submit">
                Se connecter
              </Button>
              {/* <a href="/reset-password" className="forgot-pwd">Mot de passe oublié</a> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        isChecked: state.isChecked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_checked: (isChecked) => {
            dispatch({
                type: 'SET_CHECKED',
                value: isChecked
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
