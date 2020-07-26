import React from 'react';
import {Redirect} from 'react-router-dom';
import firebaseConf from "./Firebase";

class Register extends React.Component {

  onSubmit = () => {
     
         return  <Redirect  to="/posts/" />
     
  }

  

  render() {
    return (
      <form className = 'fb'style={{ padding: `40px 0px` }}>
        <input placeholder="Name" type="Name" className='form-control' id='Name' placeholder='Name' ref={Name => this.Name = Name} />
        <br />
        <br />
        <input placeholder="School" type="School" />
        <br />
        <br />
        <input placeholder="ID Number" type="ID Number" />
        <br />
        <br />
        <input placeholder="email" type="email" />
        <br />
        <br />
        <input placeholder="password" type="password" />
        <br />
        <br />
        
        <button onClick={this.onSubmit}>Register</button>
      </form>
      
    )
  }
}






export default Register;