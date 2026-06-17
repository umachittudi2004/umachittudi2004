import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/MockTestPage.css'

export default function MockTestPage({ questions, progress }) {
  const [testMode, setTestMode] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [testQuestions, setTestQuestions] = useState([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [timerActive, setTimerActive] = useState(false)

  const startTest = (count) => {
    const randomQuestions = []
    const indices = new Set()
    while (indices.size < Math.min(count, questions.length)) {
      indices.add(Math.floor(Math.random() * questions.length))
    }
    randomQuestions.push(...Array.from(indices).map(i => questions[i]))
    
    setTestQuestions(randomQuestions)
    setCurrentQuestionIndex(0)
    setAnswers({})
    setSubmitted(false)
    setTestMode(count)
    
    // Set timer: 2 minutes per question
    const totalTime = count * 120
    setTimeRemaining(totalTime)
    setTimerActive(true)
  }

  // Timer logic
  React.useEffect(() => {
    if (!timerActive || timeRemaining <= 0) return
    
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setTimerActive(false)
          setSubmitted(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [timerActive, timeRemaining])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    setSubmitted(true)
    setTimerActive(false)
  }

  if (!testMode) {
    return (
      <div className="mock-test-page">
        <h1>⏱️ Mock Test</h1>
        <p className="test-intro">Select the number of questions for your test</p>
        
        <div className="test-options">
          <button className="test-btn" onClick={() => startTest(3)}>
            3-Question Test
            <span className="duration">~6 minutes</span>
          </button>
          <button className="test-btn" onClick={() => startTest(5)}>
            5-Question Test
            <span className="duration">~10 minutes</span>
          </button>
          <button className="test-btn" onClick={() => startTest(10)}>
            10-Question Test
            <span className="duration">~20 minutes</span>
          </button>
        </div>
      </div>
    )
  }

  if (submitted) {
    const correct = Object.keys(answers).length
    const percentage = Math.round((correct / testQuestions.length) * 100)
    
    return (
      <div className="mock-test-page">
        <div className="test-results">
          <h1>Test Results</h1>
          <div className="result-score">
            <div className="score-circle">
              <span className="score-value">{percentage}%</span>
            </div>
            <p className="score-description">{correct} out of {testQuestions.length} answered</p>
          </div>
          
          <div className="result-details">
            <h2>Review Your Answers</h2>
            {testQuestions.map((q, idx) => (
              <div key={q.id} className="result-item">
                <p className="result-question">{idx + 1}. {q.title}</p>
                <p className="result-status">
                  {answers[q.id] ? '✓ Attempted' : '✗ Not Attempted'}
                </p>
              </div>
            ))}
          </div>

          <div className="result-actions">
            <Link to="/questions" className="action-btn">Go to Questions</Link>
            <button className="action-btn" onClick={() => setTestMode(null)}>Take Another Test</button>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = testQuestions[currentQuestionIndex]
  const hasAnswer = answers[currentQuestion.id] !== undefined

  return (
    <div className="mock-test-page">
      <div className="test-header">
        <h2>Question {currentQuestionIndex + 1} of {testQuestions.length}</h2>
        <div className="timer" style={{ color: timeRemaining < 60 ? '#d32f2f' : '#1976d2' }}>
          ⏱️ {formatTime(timeRemaining)}
        </div>
      </div>

      <div className="test-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestionIndex + 1) / testQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="test-question">
        <h3>{currentQuestion.title}</h3>
        <div className="question-info">
          <span className="topic">{currentQuestion.topic}</span>
          <span className="difficulty">{currentQuestion.difficulty}</span>
        </div>
        
        <pre className="question-content">{currentQuestion.question}</pre>

        <div className="question-answer">
          <label>
            <input 
              type="checkbox"
              checked={hasAnswer}
              onChange={(e) => handleAnswer(currentQuestion.id, e.target.checked)}
            />
            I have attempted this question
          </label>
        </div>
      </div>

      <div className="test-controls">
        <button 
          onClick={handlePrev} 
          disabled={currentQuestionIndex === 0}
          className="control-btn"
        >
          ← Previous
        </button>
        
        <div className="question-counter">
          {Array.from({ length: testQuestions.length }).map((_, i) => (
            <button
              key={i}
              className={`counter-btn ${i === currentQuestionIndex ? 'active' : ''} ${answers[testQuestions[i].id] ? 'answered' : ''}`}
              onClick={() => setCurrentQuestionIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button 
          onClick={handleNext} 
          disabled={currentQuestionIndex === testQuestions.length - 1}
          className="control-btn"
        >
          Next →
        </button>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit Test
      </button>
    </div>
  )
}
