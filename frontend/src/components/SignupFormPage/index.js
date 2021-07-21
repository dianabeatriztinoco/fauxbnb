import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [isHost, setIsHost] = useState('')
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };


  return (
    <form className="signupForm" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <h1>Sign-Up</h1>
      <label>
    
  
    
        <input
          className="signUpFirstNameInput"
          placeholder="First Name"
          type="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label>
    
    <input
      className="signUpLastNameInput"
      placeholder="Last Name"
      type="lastName"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      required
    />
  </label>
        <input
          className="emailInput"
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Become a Host?
        <input
          className="signUpIsHostInput"
          type="text"
          value={isHost}
          placeholder='yes or no'
          onChange={(e) => setIsHost(e.target.value)}
          required
        />

      <label>
    
        <input
          className="signUpPasswordInput"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
        <input
          className="confirmPasswordInput"
          placeholder="confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button className="signUpButton" type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;
