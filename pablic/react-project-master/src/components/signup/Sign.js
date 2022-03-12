import React, { Component } from 'react';
import "./Sign.css";
import axios from "axios";

export class Sign extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
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
      onSubmit(e) {
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("phone", this.state.phone);
        formData.append("password", this.state.password);
        formData.append("passwordConform", this.state.passwordConform);
       
        
        axios({
          method: "post",
          url: "http://localhost/project-react1/php/sign.php",
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
             
              };
              localStorage.setItem("users", JSON.stringify(obj));
              window.location.href = "/ ";
              console.log(res.data);
            } else {
              this.setState({
                error: res.data,
              });
            }
          })
          .catch((error) => {
            console.log(error.response);
          });




      }
  render() {
    return (
    <div>
    <form method='post'>
        <div className='borderForm'>
        <div>
        <label>user name :</label>
        <br/>
        <input name='name' 
               value={this.state.name}
               onChange={this.onChangeName}/>
        </div>

        <div>
        <label>email :</label>
        <br/>
        <input type="email"
               name='email'
               value={this.state.email}
               onChange={this.onChangeEmail}/>
        </div>

        <div>
        <label>phone :</label>
        <br/>
        <input name='phone'
               value={this.state.phone}
               onChange={this.onChangePhone}/>
        </div>

        {/* <div>
        <label>image</label>
        <br/>
        <input type="file"></input>
        </div> */}
        
        <div>
        <label>password :</label>
        <br/>
        <input name='password'
               value={this.state.password}
               onChange={this.onChangePassword}/>
        </div>

        <div>
        <label>confairm password :</label>
        <br/>
        <input name='passwordConform'
               value={this.state.passwordConform}
               onChange={this.onChangePasswordconform}/>
        </div>

        <div>
        <input onClick={this.onSubmit} type="submit"/>
        </div>

        </div>
    </form>
    </div>
    );
  }
}

export default Sign;
