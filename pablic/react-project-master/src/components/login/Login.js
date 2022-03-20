import React, { Component } from "react";
import "./Login.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextBox from "../../core/textField/textField";
import axios from "axios";
import { Link } from "react-router-dom";

class login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      error:''
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      email: this.state.email,
      password: this.state.password,
    };
    axios.post("http://localhost/final-project/php/login.php", obj)
      .then((res) => {
        const obj = {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          password: res.data.password,
          image: res.data.image,
        };
        console.log(res.data);
        if (res.data === "Invalid Username or Password")
        this.setState({
          error:res.data
        })

        if (res.data.id != null) {
          localStorage.setItem("users", JSON.stringify(obj));
          if(localStorage.getItem("url"))
          {
            localStorage.removeItem("url");
            window.location.href = "http://localhost:3000/service";
          }
          else {
            window.location.href = "/";
          }
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  render() {
    // this.props.ScrollUp()
    return (

      <div className="cardbg">
      <div className="card ">
      <div className="card-bg">
        <Card className="cardStyle ">
          <CardContent>
            <div className="signupText"><strong>LOGIN</strong></div>
            <TextBox
              label="Email"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required
            />
            <TextBox
              label="Password"
              value={this.state.password}
              onChange={this.onChangePassword}
              required
            />
          </CardContent>

          <CardActions className="CardActions">
            <button  onClick={this.onSubmit} style={{marginBottom:'30px',marginTop: '0'}}  id="form_submit_button" className="form_submit_button1 button trans_200"> {" "}LOGIN{" "}<span></span><span></span><span></span></button>
          </CardActions>
        {/* <small style={{textAlgin:'center' }}><b>Don't have an Account?</b><Link to="/signup"> Sign up!</Link></small> */}
          <small id="loginError" style={{color:'red',fontWeight:'bold',marginLeft:'135px',fontSize:'14px'}}>{this.state.error}</small>
        </Card>
        </div>
      </div>
      </div>
    );
  }
}

export default login;
