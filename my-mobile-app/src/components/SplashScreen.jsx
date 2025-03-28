import React from 'react';
import './SplashScreen.css'; // Import the CSS file for styling

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="splash-content">
        <div className="loader"></div> {/* Optional: Add a loading spinner */}
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
