import { Link } from "react-router-dom"

function Card({ id, title, description, icon }) {
  return (
    <Link to={`/detail/${id}`} className="card">
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <h2 className="card-title">{title}</h2>
      </div>
      <p className="card-description">{description}</p>
    </Link>
  )
}

export default Card

