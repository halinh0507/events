import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {

  onSubmit = () => {
     
         return  <Redirect  to="/posts/" />
     
  }

  render() {
    return (
      <form className = 'fb'style={{ padding: `40px 0px` }}>
        <input placeholder="email" type="email" />
        <br />
        <input placeholder="password" type="password" />
        <br />
        <button onClick={this.onSubmit}>Login</button>
      </form>
      
    )
  }
}

export default Login;