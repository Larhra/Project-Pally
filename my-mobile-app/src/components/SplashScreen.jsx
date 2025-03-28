import { useEffect, useState } from "react";
import "./SplashScreen.css"; // Import the CSS file

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 2000); // Start fade-out effect after 2s
    setTimeout(onFinish, 2500); // Remove splash screen after 2.5s
  }, [onFinish]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <img src="/splash.jpg" alt="Splash Screen" className="splash-image" />
    </div>
  );
};

export default SplashScreen;
