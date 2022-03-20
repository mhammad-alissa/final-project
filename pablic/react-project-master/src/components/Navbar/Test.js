import React, { Component } from 'react';
import axios from 'axios';

export class Test extends Component {

  state = {
    name : "",
    email : "",
    password : "",
    phone: "",
    role : 0,
    image : "",
  }

  FormHandler = (event) => {
    event.preventDefault();
    const fd = new FormData();
    fd.append("name",this.state.name)
    fd.append("email",this.state.email)
    fd.append("password",this.state.password)
    fd.append("phone",this.state.phone)
    fd.append("role",this.state.role)
    fd.append('image', this.state.image, this.state.image.name);
     axios({
      method: 'post',
      url: 'http://localhost/project-react1/user.php',
			data: fd,
			config: { headers: {'Content-Type': 'multipart/form-data' }},
        })
        .then(function (response) {
            if(response.status === 200) {
                alert("Website deleted successfully");
                console.log(response);
            }
        })
        .catch(function (response) {
            console.log("ERROR")
        });
    
  }

  imgHandler = (event) => {
this.setState({image: event.target.files[0]})
  }

  ValueHandler = (event) => {
    console.log("HHH");
    this.setState({
      [event.target.name] : event.target.value
    })
  }


  render() {
    return <form style={{marginTop: "1000px"}}>
      <input type="text" name='name' placeholder='name' onChange={(e)=>this.ValueHandler(e)} />
      <input type="text" name='email' placeholder='email' onChange={(e)=>this.ValueHandler(e)} />
      <input type="text" name='password' placeholder='password' onChange={(e)=>this.ValueHandler(e)} />
      <input type="text" name='phone' placeholder='phone' onChange={(e)=>this.ValueHandler(e)} />
      <input type="file" name='image' onChange={(e)=>this.imgHandler(e)} />
      <button onClick={(e)=>this.FormHandler(e)}>Submit</button>
    </form>;
  }
}

export default Test;
