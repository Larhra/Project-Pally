import { useState } from "react";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <div className="app">
      <h1>Welcome to Pally App! 🚀</h1>
    </div>
  );
}

export default App;
