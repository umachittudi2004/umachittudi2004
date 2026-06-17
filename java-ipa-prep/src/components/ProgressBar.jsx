import '../styles/ProgressBar.css'

export default function ProgressBar({ completed, total }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
  
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="progress-text">{percentage}% Complete ({completed}/{total})</p>
    </div>
  )
}
