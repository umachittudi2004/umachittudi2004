import { Link } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import '../styles/HomePage.css'

export default function HomePage({ questions, progress }) {
  const solved = Object.values(progress).filter(p => p.status === 'Solved' || p.status === 'Mastered').length
  const needRevision = Object.values(progress).filter(p => p.status === 'Need Revision').length
  const mastered = Object.values(progress).filter(p => p.status === 'Mastered').length
  const total = questions.length
  const completed = solved + mastered

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Java IPA Preparation</h1>
        <p>Your personal study companion for TCS IPA exam preparation</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{total}</div>
          <div className="stat-label">Total Questions</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{solved}</div>
          <div className="stat-label">Solved</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{needRevision}</div>
          <div className="stat-label">Need Revision</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{mastered}</div>
          <div className="stat-label">Mastered</div>
        </div>
      </div>

      <div className="progress-section">
        <h2>Overall Progress</h2>
        <ProgressBar completed={completed} total={total} />
      </div>

      <div className="quick-links">
        <h2>Quick Actions</h2>
        <div className="links-grid">
          <Link to="/questions" className="quick-link">
            📚 All Questions
          </Link>
          <Link to="/roadmap" className="quick-link">
            🗺️ Learning Roadmap
          </Link>
          <Link to="/revision" className="quick-link">
            🔄 Revision
          </Link>
          <Link to="/mock-test" className="quick-link">
            ⏱️ Mock Test
          </Link>
          <Link to="/statistics" className="quick-link">
            📊 Statistics
          </Link>
        </div>
      </div>
    </div>
  )
}
