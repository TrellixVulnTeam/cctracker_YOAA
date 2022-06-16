import React, { useState } from 'react';
import './SignIn.scss';
import PropTypes from 'prop-types';
import HeaderDark from './../../components/Header/HeaderDark';

async function loginUser(credentials) {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div>
      <HeaderDark />
      <div className="header-bg"></div>
      <div className="signin-container">
        <div className="box-container">
          <div className="signin-wrapper">
            <div className="signin-title">
              <span>Welcome Back!</span>
            </div>
            <form action="#">
              <div className="signin-input-container">
              </div>
              <div class="signin-input-container">
              </div>
              <div class="signin-pass"><a href="#">Forgot password?</a></div>
              <div class="signin-button-container signin-button">
                <input type="submit" value="Login" />
              </div>
              <hr />
              <div class="signup-link">
                Not a member? <a href="#"> Signup now </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}