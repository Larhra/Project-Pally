"use client"

import { useState } from "react"
import "../styles/Profile.css"

function Profile() {
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
  })

  return (
    <div className="page-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <span className="avatar-text">AJ</span>
        </div>
        <h1 className="profile-name">{user.name}</h1>
      </div>

      <div className="profile-card">
        <h2 className="section-title">Account Information</h2>

        <div className="info-item">
          <p className="info-label">Email</p>
          <p className="info-value">{user.email}</p>
        </div>

        <div className="info-item">
          <p className="info-label">Phone</p>
          <p className="info-value">{user.phone}</p>
        </div>
      </div>

      <div className="profile-card">
        <h2 className="section-title">Settings</h2>

        <div className="settings-item">
          <p>Notifications</p>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>

        <div className="settings-item">
          <p>Face ID / Touch ID</p>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>

        <div className="settings-item">
          <p>Dark Mode</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <button className="logout-button">Log Out</button>
    </div>
  )
}

export default Profile

