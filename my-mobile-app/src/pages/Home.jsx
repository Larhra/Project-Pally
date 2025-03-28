"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Home.css"

function Home() {
  const [balance, setBalance] = useState(1250.75)
  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, name: "Sarah Johnson", amount: -50.0, date: "2023-03-27" },
    { id: 2, name: "Michael Chen", amount: 125.5, date: "2023-03-25" },
    { id: 3, name: "Emma Wilson", amount: -35.25, date: "2023-03-22" },
  ])

  return (
    <div className="page-container">
      <div className="balance-card">
        <h2 className="balance-title">Your Balance</h2>
        <p className="balance-amount">${balance.toFixed(2)}</p>
        <Link to="/send" className="send-money-button">
          Send Money
        </Link>
      </div>

      <div className="transactions-section">
        <h2 className="section-title">Recent Transactions</h2>
        <div className="transactions-list">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-details">
                <p className="transaction-name">{transaction.name}</p>
                <p className="transaction-date">{transaction.date}</p>
              </div>
              <p className={`transaction-amount ${transaction.amount < 0 ? "negative" : "positive"}`}>
                {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

