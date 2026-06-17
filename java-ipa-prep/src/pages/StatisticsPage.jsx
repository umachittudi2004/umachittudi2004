import { useMemo } from 'react'
import '../styles/StatisticsPage.css'

export default function StatisticsPage({ questions, progress }) {
  const stats = useMemo(() => {
    const byTopic = {}
    const byDifficulty = {}
    let totalSolved = 0
    let totalMastered = 0

    questions.forEach(q => {
      const p = progress[q.id] || { status: 'Unattempted' }
      const isSolved = p.status === 'Solved' || p.status === 'Mastered'
      
      // Topic stats
      if (!byTopic[q.topic]) {
        byTopic[q.topic] = { total: 0, solved: 0, mastered: 0 }
      }
      byTopic[q.topic].total++
      if (p.status === 'Solved') byTopic[q.topic].solved++
      if (p.status === 'Mastered') byTopic[q.topic].mastered++

      // Difficulty stats
      if (!byDifficulty[q.difficulty]) {
        byDifficulty[q.difficulty] = { total: 0, solved: 0, mastered: 0 }
      }
      byDifficulty[q.difficulty].total++
      if (p.status === 'Solved') byDifficulty[q.difficulty].solved++
      if (p.status === 'Mastered') byDifficulty[q.difficulty].mastered++

      if (p.status === 'Solved') totalSolved++
      if (p.status === 'Mastered') totalMastered++
    })

    return { byTopic, byDifficulty, totalSolved, totalMastered }
  }, [questions, progress])

  const overallPercentage = questions.length > 0 
    ? Math.round(((stats.totalSolved + stats.totalMastered) / questions.length) * 100)
    : 0

  const weakAreas = Object.entries(stats.byTopic)
    .map(([topic, data]) => ({
      topic,
      percentage: data.total > 0 ? Math.round(((data.solved + data.mastered) / data.total) * 100) : 0
    }))
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 3)

  const strongAreas = Object.entries(stats.byTopic)
    .map(([topic, data]) => ({
      topic,
      percentage: data.total > 0 ? Math.round(((data.solved + data.mastered) / data.total) * 100) : 0
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3)

  return (
    <div className="statistics-page">
      <h1>📊 Statistics</h1>

      <div className="overall-stats">
        <div className="stat-card large">
          <h3>Overall Completion</h3>
          <div className="stat-circle">
            <span className="stat-value">{overallPercentage}%</span>
          </div>
          <p>{stats.totalSolved + stats.totalMastered} out of {questions.length} questions completed</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Solved</h3>
          <p className="stat-number">{stats.totalSolved}</p>
        </div>
        <div className="stat-card">
          <h3>Mastered</h3>
          <p className="stat-number">{stats.totalMastered}</p>
        </div>
        <div className="stat-card">
          <h3>In Progress</h3>
          <p className="stat-number">{questions.length - stats.totalSolved - stats.totalMastered}</p>
        </div>
      </div>

      <div className="category-stats">
        <div className="category">
          <h2>Solved by Topic</h2>
          <div className="chart">
            {Object.entries(stats.byTopic).map(([topic, data]) => {
              const percentage = data.total > 0 ? Math.round(((data.solved + data.mastered) / data.total) * 100) : 0
              return (
                <div key={topic} className="chart-item">
                  <div className="chart-label">
                    <span>{topic}</span>
                    <span className="chart-value">{data.solved + data.mastered}/{data.total}</span>
                  </div>
                  <div className="chart-bar">
                    <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="category">
          <h2>Solved by Difficulty</h2>
          <div className="chart">
            {Object.entries(stats.byDifficulty).map(([difficulty, data]) => {
              const percentage = data.total > 0 ? Math.round(((data.solved + data.mastered) / data.total) * 100) : 0
              return (
                <div key={difficulty} className="chart-item">
                  <div className="chart-label">
                    <span>{difficulty}</span>
                    <span className="chart-value">{data.solved + data.mastered}/{data.total}</span>
                  </div>
                  <div className="chart-bar">
                    <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="areas-grid">
        <div className="area-card">
          <h2>🎯 Weak Areas</h2>
          {weakAreas.length > 0 ? (
            <ul className="areas-list">
              {weakAreas.map((area, idx) => (
                <li key={idx}>
                  <span className="area-name">{area.topic}</span>
                  <span className="area-percentage">{area.percentage}%</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-data">No data yet</p>
          )}
        </div>

        <div className="area-card">
          <h2>⭐ Strong Areas</h2>
          {strongAreas.length > 0 ? (
            <ul className="areas-list">
              {strongAreas.map((area, idx) => (
                <li key={idx}>
                  <span className="area-name">{area.topic}</span>
                  <span className="area-percentage">{area.percentage}%</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-data">No data yet</p>
          )}
        </div>
      </div>
    </div>
  )
}
