import React, { useState } from "react";
import apiService from './apiService'; // Import the apiService


function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSignUp = async () => {
    try {
      const response = await apiService.post('http://localhost:8080/api/v1/auth/register', {
        name: state.name,
        email: state.email,
        password: state.password
      });

      // Handle success, e.g., redirect to a success page or display a success message
      console.log('Signup Successful', response.data);
    } catch (error) {
      // Handle errors, e.g., display error messages
      console.error('Signup Error', error);
    }
  };

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();

    // Call the handleSignUp function to attempt sign-up
    handleSignUp();
    
    // Clear the form fields
    setState({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
