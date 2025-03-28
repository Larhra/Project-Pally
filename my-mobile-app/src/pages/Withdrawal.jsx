"use client"

import { useState } from "react"
import { ChevronUp, Menu } from "lucide-react"
import "../styles/Withdrawal.css"

function Withdrawal() {
  const [amount, setAmount] = useState("0.00")
  const [address, setAddress] = useState("")
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Olivia with 250 USDC payment request", isNew: true },
    { id: 2, text: "David with 50 USDC payment request", isNew: false },
    { id: 3, text: "Olivia with 100 USDC payment request", isNew: false },
    { id: 4, text: "Olivia with 250 USDC payment request", isNew: false },
  ])

  const handleAmountChange = (e) => {
    // Only allow numbers and a single decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "")
    // Prevent multiple decimal points
    const parts = value.split(".")
    if (parts.length > 2) {
      return
    }
    setAmount(value)
  }

  return (
    <div className="withdrawal-container">
      <header className="withdrawal-header">
        <div className="logo">
          <span className="logo-text">PALLY</span>
        </div>
        <button className="menu-button">
          <Menu size={24} />
        </button>
      </header>

      <div className="withdrawal-content">
        <h1 className="withdrawal-title">Send custom payment transfers anytime, anywhere.</h1>

        <div className="action-buttons">
          <button className="action-button">Deposit</button>
          <button className="action-button active">Withdrawal</button>
          <button className="action-button">Timelock</button>
          <button className="action-button more">···</button>
        </div>

        <div className="withdrawal-card">
          <div className="card-section amount-section">
            <div className="amount-label">Amount to top up</div>
            <div className="amount-input-container">
              <input type="text" className="amount-input" value={amount} onChange={handleAmountChange} />
              <button className="token-button">Token</button>
            </div>
          </div>

          <div className="card-divider">
            <div className="arrow-up">
              <ChevronUp size={20} />
            </div>
          </div>

          <div className="card-section address-section">
            <div className="frame-label">Frame 31</div>
            <input
              type="text"
              className="address-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your address"
            />
          </div>

          <button className="withdraw-button">Withdraw</button>
        </div>

        <div className="notifications-section">
          <div className="notifications-list">
            {notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                <div className="notification-text">
                  {notification.isNew && <span className="notification-dot"></span>}
                  {notification.text}
                </div>
                <button className="view-button">View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Withdrawal

