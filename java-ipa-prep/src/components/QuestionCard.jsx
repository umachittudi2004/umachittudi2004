import { Link } from 'react-router-dom'
import Badge from './Badge'
import '../styles/QuestionCard.css'

export default function QuestionCard({ question, progress }) {
  const { status = 'Unattempted' } = progress

  return (
    <Link to={`/question/${question.id}`} className="question-card-link">
      <div className="question-card">
        <div className="card-header">
          <h3>{question.title}</h3>
          <Badge status={status} />
        </div>
        <div className="card-body">
          <p className="topic-tag">{question.topic}</p>
          <p className="difficulty-tag">{question.difficulty}</p>
        </div>
        <div className="card-footer">
          <span className="question-id">Q{question.id}</span>
        </div>
      </div>
    </Link>
  )
}
