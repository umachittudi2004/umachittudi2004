import { useState, useMemo } from 'react'
import SearchBar from '../components/SearchBar'
import FilterPanel from '../components/FilterPanel'
import QuestionCard from '../components/QuestionCard'
import '../styles/AllQuestionsPage.css'

export default function AllQuestionsPage({ questions, getQuestionProgress }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')

  const topics = [...new Set(questions.map(q => q.topic))].sort()
  const difficulties = ['Easy', 'Medium', 'Hard']

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesSearch = q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.topic.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTopic = !selectedTopic || q.topic === selectedTopic
      const matchesDifficulty = !selectedDifficulty || q.difficulty === selectedDifficulty
      
      return matchesSearch && matchesTopic && matchesDifficulty
    })
  }, [questions, searchTerm, selectedTopic, selectedDifficulty])

  return (
    <div className="all-questions-page">
      <h1>All Questions</h1>
      
      <SearchBar 
        value={searchTerm} 
        onChange={setSearchTerm}
        placeholder="Search by title or topic..."
      />

      <FilterPanel 
        topics={topics}
        difficulties={difficulties}
        selectedTopic={selectedTopic}
        selectedDifficulty={selectedDifficulty}
        onTopicChange={setSelectedTopic}
        onDifficultyChange={setSelectedDifficulty}
      />

      <div className="results-info">
        <p>Showing {filteredQuestions.length} of {questions.length} questions</p>
      </div>

      <div className="questions-grid">
        {filteredQuestions.map(question => (
          <QuestionCard 
            key={question.id} 
            question={question} 
            progress={getQuestionProgress(question.id)}
          />
        ))}
      </div>
    </div>
  )
}
