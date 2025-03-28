"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/SendMoney.css"

function SendMoney() {
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would process the payment here
    alert(`$${amount} sent to ${recipient}`)
    navigate("/")
  }

  const recentContacts = [
    { id: 1, name: "Sarah J.", avatar: "👩‍🦰" },
    { id: 2, name: "Michael C.", avatar: "👨‍💼" },
    { id: 3, name: "Emma W.", avatar: "👩‍🦱" },
    { id: 4, name: "David L.", avatar: "👨‍🦱" },
  ]

  return (
    <div className="page-container">
      <h1 className="page-title">Send Money</h1>

      <div className="recent-contacts">
        <h2 className="section-title">Recent</h2>
        <div className="contacts-list">
          {recentContacts.map((contact) => (
            <div key={contact.id} className="contact-item" onClick={() => setRecipient(contact.name)}>
              <div className="contact-avatar">{contact.avatar}</div>
              <p className="contact-name">{contact.name}</p>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="send-form">
        <div className="form-group">
          <label>To</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Name or email"
            required
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <div className="amount-input">
            <span className="currency-symbol">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              step="0.01"
              min="0.01"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Note (optional)</label>
          <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="What's it for?" />
        </div>

        <button type="submit" className="send-button">
          Send Money
        </button>
      </form>
    </div>
  )
}

export default SendMoney

