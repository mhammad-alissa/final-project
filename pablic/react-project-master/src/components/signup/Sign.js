import "./Sign.css";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextBox from "../../core/textField/textField";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeImageform = this.onChangeImageform.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordconform = this.onChangePasswordconform.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordConform: "",
      image: "images.png",
      error: "",
    };
  }

   onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangePasswordconform(e) {
    this.setState({
      passwordConform: e.target.value,
    });
  }
  onChangeImageform(e) {
    this.setState({
      image: e.target.files[0],
    });
  }

  onSubmit(e) {
    var bool = true;

    let regexPass =
      /^(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    let regexEmail = /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo|outlook).com$/;
    // let regexMobile = /^[0][7][7][0-9]{7}$/;
    // let regexfullname            = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){3}$/;

    // fullname
    const fullNameMessageError = document.getElementById(
      "fullNameMessageError"
    );

    // email
    const emailMessageError = document.getElementById("emailMessageError");

    const phoneMessageError = document.getElementById("phoneMessageError");

    // password
    const passMessageError = document.getElementById("passMessageError");

    const ConfirmPassMessageError = document.getElementById(
      "ConfirmPassMessageError"
    );

    // fullname condition
    fullNameMessageError.innerText = "";
    if (this.state.name === "") {
      fullNameMessageError.innerText = "User Name is empty";
      bool = false;
    }

    // email condition
    emailMessageError.innerText = "";
    if (this.state.email === "") {
      emailMessageError.innerText = "Email is empty";
      bool = false;
    } else if (!this.state.email.match(regexEmail)) {
      emailMessageError.innerText = "Email is not valid";
      bool = false;
    }
    // phone condition
    phoneMessageError.innerText = "";
    if (this.state.phone === "") {
      phoneMessageError.innerText = "phone is empty";
      bool = false;
    }

    // password condition
    passMessageError.innerText = "";
    if (this.state.password === "") {
      passMessageError.innerText = "password is empty";
      bool = false;
    } else if (!this.state.password.match(regexPass)) {
      passMessageError.innerText = "password is must contain at least one upper and one special charcter ";
      bool = false;
    }
    // password confirm condition
    ConfirmPassMessageError.innerText = "";
    if (this.state.passwordConform === "") {
      ConfirmPassMessageError.innerText = "confirm password is empty";
      bool = false;
    } else if (this.state.passwordConform !== this.state.password) {
      ConfirmPassMessageError.innerText = "confirm password is not match";
      bool = false;
    }

    if (bool === true) {
      console.log("hhhh");
      const formData = new FormData();
      formData.append("name", this.state.name);
      formData.append("email", this.state.email);
      formData.append("phone", this.state.phone);
      formData.append("password", this.state.password);
      formData.append("passwordConform", this.state.passwordConform);
      formData.append("image", this.state.image, this.state.image.name);
      formData.append("image_name", this.state.image.name);
      axios({
        method: "post",
        url: "http://localhost/final-project/php/sign.php",
        data: formData,
        config: { headers: { "content-Type": "multipart/form-data" } },
      })
        .then((res) => {
          if (res.data !== "The email you entered already exists") {
            const obj = {
              id: res.data.id,
              name: res.data.name,
              email: res.data.email,
              phone: res.data.phone,
              password: res.data.password,
              image: res.data.image,
            };
            localStorage.setItem("users", JSON.stringify(obj));
            if(localStorage.getItem("url"))
          {
            localStorage.removeItem("url");
            window.location.href = "http://localhost:3000/service";
          }
          else {
            window.location.assign("/");
          }
            
          } else {
            this.setState({
              error: res.data,
            });
          }
        })
        .catch((error) => {
          console.log(error.response);
        });

      // this.setState({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   password: "",
      //   passwordConform: "",
      //   image: "",
      // });

      e.preventDefault();
    }
  }

    // componentDidMount(){
    //       this.props.ScrollUp()
    // }

  render() {
    return (
      <div className="cardbg">
      <div className="cardsign">
        <Card className="cardStyle">
          <CardContent>
            <form>
              <div className="signupText"><strong>SIGNUP</strong> </div>
              
              <TextBox
                label="Full Name"
                value={this.state.name}
                onChange={this.onChangeName}
              />
              <small id="fullNameMessageError" className="form-text"></small>

              <TextBox
                label="Email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <small id="emailMessageError" className="form-text"></small>

              <TextBox
                label="Phone Number"
                value={this.state.phone}
                onChange={this.onChangePhone}
              />
              <small id="phoneMessageError" className="form-text"></small>
          
              <TextBox
                type={'password'}
                label="Password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
              <small id="passMessageError" className="form-text"></small>
              <TextBox
                label="Conform Password"
                value={this.state.passwordConform}
                onChange={this.onChangePasswordconform}
              />
              <small id="ConfirmPassMessageError" className="form-text"></small>
               <br/>
              <div className="parent-div">
              <button className="btn-upload">Choose image</button>
                <input type="file" onChange={this.onChangeImageform} />
                </div>
            </form>
          </CardContent>
<small style={{ color: "red", display: "block" ,fontWeight:'bold',fontSize:"15px", textAlign:"center" }}>
              {this.state.error}
            </small>
            <button style={{marginBottom:'30px',marginTop: '0'}}  onClick={this.onSubmit} id="form_submit_button" class="form_submit_button4 button trans_200"> SIGNUP{" "}<span></span><span></span><span></span></button>

<br></br>
        </Card>
        </div>
      </div>
    );
  }
}

export default Signup;
