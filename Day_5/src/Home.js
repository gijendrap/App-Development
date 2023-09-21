import React from 'react';
import Navbar from "./navbarcomponents/Navbar";
import "./navbarcomponents/Navbar.css";

function HomePage(props) {
  // Define your CSS styles as an object
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '20px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: '16px',
    },
  };

  // Check if props.location and props.location.state are defined
  const email = (props.location && props.location.state && props.location.state.email) || null;
  
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to My Website</h1>
        <p style={styles.paragraph}>
          {email ? `Hello, ${email}!` : 'Hello user@example.com!  This is the homepage of my website built with React.js.'}
        </p>
      </div>
    </div>
  );
}

export default HomePage;
