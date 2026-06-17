import { Link } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import '../styles/RoadmapPage.css'

export default function RoadmapPage({ questions, progress }) {
  const getQuestionProgress = (id) => {
    return progress[id] || { status: 'Unattempted', notes: '' }
  }

  // Phase 1: Beginner - Easy questions
  const phase1 = questions
    .filter(q => q.difficulty === 'Easy')
    .sort((a, b) => a.id - b.id)

  // Phase 2: Intermediate - Medium questions
  const phase2 = questions
    .filter(q => q.difficulty === 'Medium')
    .sort((a, b) => a.id - b.id)

  // Phase 3: IPA Pattern - IPA questions sorted by ID
  const phase3 = questions
    .filter(q => q.topic === 'IPA Pattern Questions' || q.title.match(/^IPA\d+$/))
    .sort((a, b) => {
      const numA = parseInt(a.title.replace('IPA', '')) || a.id
      const numB = parseInt(b.title.replace('IPA', '')) || b.id
      return numA - numB
    })

  // Phase 4: Mixed Revision - Hard questions
  const phase4 = questions
    .filter(q => q.difficulty === 'Hard')
    .sort((a, b) => a.id - b.id)

  const renderPhase = (title, phaseQuestions) => {
    return (
      <div className="phase">
        <h2>{title}</h2>
        <p className="phase-count">{phaseQuestions.length} questions</p>
        <div className="phase-questions">
          {phaseQuestions.map(q => (
            <QuestionCard 
              key={q.id}
              question={q}
              progress={getQuestionProgress(q.id)}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="roadmap-page">
      <h1>Learning Roadmap</h1>
      <p className="roadmap-intro">Follow this structured path to master Java IPA preparation</p>

      {renderPhase('Phase 1: Beginner', phase1)}
      {renderPhase('Phase 2: Intermediate', phase2)}
      {renderPhase('Phase 3: IPA Pattern Questions', phase3)}
      {renderPhase('Phase 4: Mixed Revision', phase4)}
    </div>
  )
}
