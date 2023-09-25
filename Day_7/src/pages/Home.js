import React from "react";
import Navbar from '../Navcomponents/Navbar';
import { useLocation } from "react-router-dom"; // Import the useLocation hook

function Home() {
  // Use the useLocation hook to access the location state
  const location = useLocation();
  const username = location.state ? location.state.username : "Guest"; // Default to "Guest" if no username is provided

  return (
    <div>
      <Navbar />
      <h1>Welcome to the Home Page</h1>
      <p>Hello, {username}!</p>
      {/* Add content specific to your home page */}
    </div>
  );
}

export default Home;
