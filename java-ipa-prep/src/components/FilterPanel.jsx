import '../styles/FilterPanel.css'

export default function FilterPanel({ topics, difficulties, selectedTopic, selectedDifficulty, onTopicChange, onDifficultyChange }) {
  return (
    <div className="filter-panel">
      <div className="filter-group">
        <label>Topic:</label>
        <select value={selectedTopic} onChange={(e) => onTopicChange(e.target.value)}>
          <option value="">All Topics</option>
          {topics.map(topic => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Difficulty:</label>
        <select value={selectedDifficulty} onChange={(e) => onDifficultyChange(e.target.value)}>
          <option value="">All Levels</option>
          {difficulties.map(diff => (
            <option key={diff} value={diff}>{diff}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
