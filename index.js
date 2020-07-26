import React from 'react'
import ReactDOM from 'react-dom'

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import App from './App'
import Users from './users'
import Contact from './contact'
import Notfound from './notfound'
import Login from './login'
import "./index.css";
import register from './register'
const routing = (
  <Router>
    <div className = 'box'>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={register} />
        <Route path="/login" component={Login} />
        
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))




