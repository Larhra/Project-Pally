import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div className="app-content">
          {/* Your main app content goes here */}
          <h1>Welcome to My App</h1>
        </div>
      )}
    </>
  );
};

export default App;
