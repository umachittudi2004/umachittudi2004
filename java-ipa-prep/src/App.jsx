import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AllQuestionsPage from './pages/AllQuestionsPage'
import QuestionDetailsPage from './pages/QuestionDetailsPage'
import RoadmapPage from './pages/RoadmapPage'
import RevisionPage from './pages/RevisionPage'
import MockTestPage from './pages/MockTestPage'
import StatisticsPage from './pages/StatisticsPage'
import questions from './data/questions.json'
import './styles/App.css'

function App() {
  const [progress, setProgress] = useState({})

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('javaIPA_progress')
    if (saved) {
      setProgress(JSON.parse(saved))
    }
  }, [])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(progress).length > 0) {
      localStorage.setItem('javaIPA_progress', JSON.stringify(progress))
    }
  }, [progress])

  const updateQuestionStatus = (questionId, status, notes = '') => {
    setProgress(prev => ({
      ...prev,
      [questionId]: { status, notes, revision: status === 'Need Revision' }
    }))
  }

  const updateQuestionNotes = (questionId, notes) => {
    setProgress(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], notes }
    }))
  }

  const getQuestionProgress = (questionId) => {
    return progress[questionId] || { status: 'Unattempted', notes: '' }
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage questions={questions} progress={progress} />} />
            <Route path="/questions" element={<AllQuestionsPage questions={questions} progress={progress} getQuestionProgress={getQuestionProgress} />} />
            <Route path="/question/:id" element={<QuestionDetailsPage questions={questions} progress={progress} updateQuestionStatus={updateQuestionStatus} updateQuestionNotes={updateQuestionNotes} getQuestionProgress={getQuestionProgress} />} />
            <Route path="/roadmap" element={<RoadmapPage questions={questions} progress={progress} />} />
            <Route path="/revision" element={<RevisionPage questions={questions} progress={progress} />} />
            <Route path="/mock-test" element={<MockTestPage questions={questions} progress={progress} />} />
            <Route path="/statistics" element={<StatisticsPage questions={questions} progress={progress} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
