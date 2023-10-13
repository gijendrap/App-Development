import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from  'react-redux';
import { loginSuccess } from './redux/actions';
import apiService from './apiService';

function SignInForm(props) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Handle sign-in
  const handleSignIn = async () => {
    try {
      const response = await apiService.post('http://localhost:8080/api/v1/auth/login', {
        email: state.email,
        password: state.password,
      });
      console.log('Login Response', response)





      const token = response.data.token;
      localStorage.setItem('authToken',token);





      // Assuming the backend returns a user object upon successful sign-in
      const userData = response.data;

      // Dispatch the user data to the Redux store (replace with your actual action)
      props.loginSuccess(userData);

      // Clear the form fields
      setState({
        email: "",
        password: "",
      });

      // Push to the home page or any other route as needed
      navigate("/Home", { state: { userData } });

      // Store user data in local storage if necessary
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      // Handle sign-in errors and display appropriate messages
      console.error('Signin Error', error);
    }
  };

  // Validate the form
  const validateForm = () => {
    let valid = true;
    const { email, password } = state;
    const newErrors = {};

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    if (validateForm()) {
      // Call the handleSignIn function to attempt sign-in
      handleSignIn();
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          {/* ... (social login buttons) ... */}
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { loginSuccess })(SignInForm);
