import "../styles/MainApp.css"

const MainApp = () => {
  return (
    <div className="main-app">
      <header className="app-header">
        <h1>PALLY</h1>
        <p>Send money with ease</p>
      </header>

      <div className="app-content">
        <div className="balance-card">
          <h2>Your Balance</h2>
          <p className="balance-amount">$1,250.75</p>
          <button className="send-button">Send Money</button>
        </div>

        <div className="recent-transactions">
          <h2>Recent Transactions</h2>
          <div className="transaction-list">
            <div className="transaction-item">
              <div>
                <p className="transaction-name">Sarah Johnson</p>
                <p className="transaction-date">Mar 27, 2023</p>
              </div>
              <p className="transaction-amount outgoing">-$50.00</p>
            </div>
            <div className="transaction-item">
              <div>
                <p className="transaction-name">Michael Chen</p>
                <p className="transaction-date">Mar 25, 2023</p>
              </div>
              <p className="transaction-amount incoming">+$125.50</p>
            </div>
            <div className="transaction-item">
              <div>
                <p className="transaction-name">Emma Wilson</p>
                <p className="transaction-date">Mar 22, 2023</p>
              </div>
              <p className="transaction-amount outgoing">-$35.25</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="app-nav">
        <button className="nav-button active">
          <span className="nav-icon">🏠</span>
          <span>Home</span>
        </button>
        <button className="nav-button">
          <span className="nav-icon">💸</span>
          <span>Send</span>
        </button>
        <button className="nav-button">
          <span className="nav-icon">👤</span>
          <span>Profile</span>
        </button>
      </nav>
    </div>
  )
}

export default MainApp

