import { Link } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import '../styles/RevisionPage.css'

export default function RevisionPage({ questions, progress }) {
  const getQuestionProgress = (id) => {
    return progress[id] || { status: 'Unattempted', notes: '' }
  }

  const needRevision = questions.filter(q => {
    const p = progress[q.id]
    return p && p.status === 'Need Revision'
  })

  const couldntSolve = questions.filter(q => {
    const p = progress[q.id]
    return p && p.status === 'Unattempted' && p.revision === true
  })

  const revisionQuestions = needRevision.concat(couldntSolve)

  if (revisionQuestions.length === 0) {
    return (
      <div className="revision-page">
        <h1>🎉 Revision</h1>
        <p className="no-items">Great! No questions marked for revision yet.</p>
        <p className="info">As you study, mark questions as "Need Revision" to see them here.</p>
      </div>
    )
  }

  return (
    <div className="revision-page">
      <h1>🎉 Revision</h1>
      <div className="revision-stats">
        <div className="stat">
          <span className="stat-value">{needRevision.length}</span>
          <span className="stat-label">Need Revision</span>
        </div>
        <div className="stat">
          <span className="stat-value">{revisionQuestions.length}</span>
          <span className="stat-label">Total for Review</span>
        </div>
      </div>

      {needRevision.length > 0 && (
        <div className="revision-section">
          <h2>Need Revision</h2>
          <div className="questions-grid">
            {needRevision.map(q => (
              <QuestionCard 
                key={q.id}
                question={q}
                progress={getQuestionProgress(q.id)}
              />
            ))}
          </div>
        </div>
      )}

      {couldntSolve.length > 0 && (
        <div className="revision-section">
          <h2>Couldn't Solve</h2>
          <div className="questions-grid">
            {couldntSolve.map(q => (
              <QuestionCard 
                key={q.id}
                question={q}
                progress={getQuestionProgress(q.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
