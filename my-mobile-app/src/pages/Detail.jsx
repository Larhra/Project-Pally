"use client"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Detail() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  // In a real app, you would fetch data from an API
  useEffect(() => {
    // Simulating API call
    const items = [
      { id: 1, title: "Feature 1", description: "This is feature 1", icon: "⭐" },
      { id: 2, title: "Feature 2", description: "This is feature 2", icon: "🔥" },
      { id: 3, title: "Feature 3", description: "This is feature 3", icon: "💡" },
    ]

    const foundItem = items.find((item) => item.id === Number.parseInt(id))
    setItem(foundItem)
  }, [id])

  if (!item) return <div>Loading...</div>

  return (
    <div className="page-container">
      <h1 className="page-title">{item.title}</h1>
      <div className="detail-card">
        <div className="detail-icon">{item.icon}</div>
        <p className="detail-description">{item.description}</p>
      </div>
    </div>
  )
}

export default Detail

