import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginSuccess } from './redux/actions';

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

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    if (validateForm()) {
      const { email, password } = state;

      // Perform your authentication logic here (e.g., API call)
      // For now, let's assume any email and password combination is valid
      // Replace this with your actual authentication logic
      const username = email;
      setState({
        email: "",
        password: "",
      });
      props.loginSuccess(username);

      // Push to the home page
      navigate("/Home", { state: { username: username } });
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
