import React, { Component } from 'react';
import './App.css'; // Import your CSS file here
import { Link, Navigate  } from 'react-router-dom';
class App extends Component {
  state = {
    redirectToHome: false, // Add a state variable to control redirection
  };
  componentDidMount() {
    const signupButton = document.getElementById("signup-button");
    const loginButton = document.getElementById("login-button");
    const userForms = document.getElementById("user_options-forms");

    signupButton.addEventListener("click", () => {
      userForms.classList.remove("bounceRight");
      userForms.classList.add("bounceLeft");
    }, false);

    loginButton.addEventListener("click", () => {
      userForms.classList.remove("bounceLeft");
      userForms.classList.add("bounceRight");
    }, false);
  }

  validCredentials = {
    email: 'user@example.com',
    password: 'password123',
    
  };

  handleSubmit = (e, formType) => {
    e.preventDefault();
    const emailInput = document.getElementById(`${formType}-email`);
    const passwordInput = document.getElementById(`${formType}-password`);
    
    // Validation logic
    if (!emailInput.value.trim()) {
      alert('Please enter your email.');
      return;
    }

    if (!passwordInput.value.trim()) {
      alert('Please enter your password.');
      return;
    }

    if (
      emailInput.value.trim() === this.validCredentials.email &&
      passwordInput.value.trim() === this.validCredentials.password
    ) {
      // If valid, set redirectToHome to true to trigger redirection
      this.setState({ redirectToHome: true });
    } else {
      alert('Invalid credentials. Please try again.');
    }

    // If validation passes, you can perform further actions here.
    console.log(`${formType} form submitted with email: ${emailInput.value}`);
  }

  render() {
    if (this.state.redirectToHome) {
      return <Navigate to="/Home" />;
    }
    return (
      <div className="App">
         <Link to="/Home"><button>
              Go to Page 2 
            </button>
            </Link>
        <section className="user">
          <div className="user_options-container">
            <div className="user_options-text">
              <div className="user_options-unregistered">
                <h2 className="user_unregistered-title">Don't have an account?</h2>
                <p className="user_unregistered-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  sunt expedita! Reiciendis ratione soluta tempora numquam!
                  Consequuntur.
                </p>
                <button className="user_unregistered-signup" id="signup-button">
                  Sign up
                </button>
              </div>

              <div className="user_options-registered">
                <h2 className="user_registered-title">Have an account?</h2>
                <p className="user_registered-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in
                  laboriosam adipisci. Facilis laudantium adipisci illo!
                </p>
                <button className="user_registered-login" id="login-button">
                  Login
                </button>
              </div>
            </div>

            <div className="user_options-forms" id="user_options-forms">
              <div className="user_forms-login">
                <h2 className="forms_title">Login</h2>
                <form className="forms_form" onSubmit={(e) => this.handleSubmit(e, 'login')}>
                  <fieldset className="forms_fieldset">
                    <div className="forms_field">
                      <input type="text" className="forms_field-input" id="login-email" required />
                      <label className="forms_field-label">Email</label>
                    </div>
                    <div className="forms_field">
                      <input type="password" className="forms_field-input" id="login-password" required />
                      <label className="forms_field-label">Password</label>
                    </div>
                  </fieldset>
                  <div className="forms_buttons">
                    <button type="button" className="forms_buttons-forgot">
                      Forgot password?
                    </button>
                    <input
                      type="submit"
                      value="Log In"
                      className="forms_buttons-action"
                    />
                  </div>
                </form>
              </div>
              <div className="user_forms-signup">
                <h2 className="forms_title">Sign Up</h2>
                <form className="forms_form" onSubmit={(e) => this.handleSubmit(e, 'signup')}>
                  <fieldset className="forms_fieldset">
                    <div className="forms_field">
                      <input type="text" className="forms_field-input" id="signup-fullname" required />
                      <label className="forms_field-label"> Full Name </label>
                    </div>
                    <div className="forms_field">
                      <input type="text" className="forms_field-input" id="signup-email" required />
                      <label className="forms_field-label">Email</label>
                    </div>
                    <div className="forms_field">
                      <input type="password" className="forms_field-input" id="signup-password" required />
                      <label className="forms_field-label">Password</label>
                    </div>
                  </fieldset>
                  <div className="forms_buttons">
                    <input
                      type="submit"
                      value="Sign up"
                      className="forms_buttons-action"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
