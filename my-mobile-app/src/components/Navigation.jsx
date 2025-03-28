import { NavLink } from "react-router-dom"
import { Home, Send, User } from "lucide-react"
import "../styles/Navigation.css"

function Navigation() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
        <Home className="nav-icon" />
        <span className="nav-text">Home</span>
      </NavLink>
      <NavLink to="/send" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
        <Send className="nav-icon" />
        <span className="nav-text">Send</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
        <User className="nav-icon" />
        <span className="nav-text">Profile</span>
      </NavLink>
    </nav>
  )
}

export default Navigation

