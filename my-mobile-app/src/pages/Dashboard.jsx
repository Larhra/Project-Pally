"use client"

import { useState } from "react"
import { X, Plus, Menu, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"
import "../styles/Dashboard.css"

function Dashboard() {
  const [amount, setAmount] = useState("0.00")
  const [recipients, setRecipients] = useState(["Alex", "Alex"])
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Olivia with 250 USDC payment request", isNew: true },
    { id: 2, text: "David with 50 USDC payment request", isNew: false },
    { id: 3, text: "Olivia with 100 USDC payment request", isNew: false },
    { id: 4, text: "Olivia with 250 USDC payment request", isNew: false },
  ])

  const handleAddRecipient = () => {
    setRecipients([...recipients, "Alex"])
  }

  const handleRemoveRecipient = (index) => {
    const newRecipients = [...recipients]
    newRecipients.splice(index, 1)
    setRecipients(newRecipients)
  }

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
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">
          <span className="logo-text">PALLY</span>
        </div>
        <button className="menu-button">
          <Menu size={24} />
        </button>
      </header>

      <div className="dashboard-content">
        <h1 className="dashboard-title">Send custom payment transfers anytime, anywhere.</h1>

        <div className="action-buttons">
          <button className="action-button active">Deposit</button>
          <Link to="/withdrawal">
            <button className="action-button">Withdrawal</button>
          </Link>
          <Link to="/timelock">
            <button className="action-button">Timelock</button>
          </Link>
          <button className="action-button more">···</button>
        </div>

        <div className="transfer-card">
          <div className="card-section recipients-section">
            <label>Recipient(s)</label>
            <div className="recipients-list">
              {recipients.map((recipient, index) => (
                <div key={index} className="recipient-tag">
                  <span>{recipient}</span>
                  <button className="remove-recipient" onClick={() => handleRemoveRecipient(index)}>
                    <X size={14} />
                  </button>
                </div>
              ))}
              <button className="add-recipient" onClick={handleAddRecipient}>
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="card-divider">
            <div className="arrow-up">
              <ChevronUp size={20} />
            </div>
          </div>

          <div className="card-section amount-section">
            <div className="amount-label">You send:</div>
            <div className="amount-input-container">
              <input type="text" className="amount-input" value={amount} onChange={handleAmountChange} />
              <button className="token-button">Token</button>
            </div>
          </div>

          <button className="send-button">Send</button>
        </div>

        <div className="notifications-section">
          <h2 className="section-title">Notifications</h2>
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

export default Dashboard

