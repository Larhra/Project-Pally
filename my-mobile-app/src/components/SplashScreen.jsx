"use client"

import { useState, useEffect } from "react"
import "../styles/SplashScreen.css"

function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-content">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/splash.jpg.JPG-eB4UVs3PuahbyOClbPuu3UYVoCuQXS.jpeg"
          alt="PALLY - send money with ease"
          className="splash-logo"
        />
      </div>
    </div>
  )
}

export default SplashScreen

