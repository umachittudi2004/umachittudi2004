import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Badge from '../components/Badge'
import '../styles/QuestionDetailsPage.css'

export default function QuestionDetailsPage({ questions, getQuestionProgress, updateQuestionStatus, updateQuestionNotes }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const question = questions.find(q => q.id === parseInt(id))
  const [showSolution, setShowSolution] = useState(false)
  const [showHint1, setShowHint1] = useState(false)
  const [showHint2, setShowHint2] = useState(false)
  
  const progress = getQuestionProgress(parseInt(id))
  const [notes, setNotes] = useState(progress.notes || '')

  if (!question) {
    return <div className="question-details-page"><p>Question not found</p></div>
  }

  const handleStatusChange = (status) => {
    updateQuestionStatus(parseInt(id), status, notes)
  }

  const handleNotesChange = (e) => {
    const newNotes = e.target.value
    setNotes(newNotes)
    updateQuestionNotes(parseInt(id), newNotes)
  }

  return (
    <div className="question-details-page">
      <button onClick={() => navigate('/questions')} className="back-btn">← Back</button>

      <div className="question-header">
        <div>
          <h1>{question.title}</h1>
          <Badge status={progress.status || 'Unattempted'} />
        </div>
        <div className="question-meta">
          <span className="topic-badge">{question.topic}</span>
          <span className="difficulty-badge">{question.difficulty}</span>
        </div>
      </div>

      <div className="question-content">
        <div className="section">
          <h2>📋 Problem Statement</h2>
          <pre className="problem-statement">{question.question}</pre>
        </div>

        <div className="hints-section">
          <h2>💡 Hints</h2>
          
          <div className="hint">
            <button 
              className="hint-button"
              onClick={() => setShowHint1(!showHint1)}
            >
              Hint 1: {showHint1 ? '▼' : '▶'}
            </button>
            {showHint1 && <p className="hint-content">{question.hints[0] || 'No hint available'}</p>}
          </div>

          <div className="hint">
            <button 
              className="hint-button"
              onClick={() => setShowHint2(!showHint2)}
            >
              Hint 2: {showHint2 ? '▼' : '▶'}
            </button>
            {showHint2 && <p className="hint-content">{question.hints[1] || 'No hint available'}</p>}
          </div>
        </div>

        <div className="solution-section">
          <button 
            className="reveal-btn"
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? '🙈 Hide Solution' : '👁️ Reveal Solution'}
          </button>
          
          {showSolution && (
            <div className="solution-content">
              <h2>✓ Solution</h2>
              <pre className="solution-code">{question.solution}</pre>
            </div>
          )}
        </div>

        <div className="notes-section">
          <h2>📝 Personal Notes</h2>
          <textarea 
            value={notes}
            onChange={handleNotesChange}
            placeholder="Add your notes, observations, or approach here..."
            className="notes-textarea"
          />
        </div>

        <div className="status-section">
          <h2>📊 Mark Status</h2>
          <div className="status-buttons">
            <button 
              className={`status-btn ${progress.status === 'Unattempted' ? 'active' : ''}`}
              onClick={() => handleStatusChange('Unattempted')}
            >
              Unattempted
            </button>
            <button 
              className={`status-btn ${progress.status === 'Solved' ? 'active' : ''}`}
              onClick={() => handleStatusChange('Solved')}
            >
              Solved
            </button>
            <button 
              className={`status-btn ${progress.status === 'Need Revision' ? 'active' : ''}`}
              onClick={() => handleStatusChange('Need Revision')}
            >
              Need Revision
            </button>
            <button 
              className={`status-btn ${progress.status === 'Mastered' ? 'active' : ''}`}
              onClick={() => handleStatusChange('Mastered')}
            >
              Mastered
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
