import { Link } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>☕ Java IPA Prep</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/questions">Questions</Link>
          <Link to="/revision">Revision</Link>
          <Link to="/mock-test">Mock Test</Link>
          <Link to="/statistics">Statistics</Link>
        </nav>
      </div>
    </header>
  )
}
