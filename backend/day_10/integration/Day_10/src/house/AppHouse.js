// Import the CitySvg component at the top of your App.js or main component file
import React, { Component } from 'react';
import CitySvg from './CitySvg'; // Replace './CitySvg' with the correct path to your CitySvg component file

// Define your App component
class AppHouse extends Component {
  render() {
    return (
      <div className="wrapper">
        <CitySvg />
      </div>
    );
  }
}

// Render the App component
export default AppHouse;
