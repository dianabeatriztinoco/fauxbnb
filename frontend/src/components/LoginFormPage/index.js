import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';



function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);


  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
   

<div className='loginFormDiv'>
    <form className="loginForm" onSubmit={handleSubmit}>
     <label className="loginFormLabel">Log in</label> 
     <label className="loginFormLabelWelcome">Welcome to Fauxbnb</label> 
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
     
        <input
          className='logInUserNameInput'
          type="text"
          placeholder='Email'
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <input
          className='logInPasswordInput'
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
    
      <button className="loginButton" type="submit">Log In</button>
      
    </form>
    </div>
  );
}

export default LoginFormPage;