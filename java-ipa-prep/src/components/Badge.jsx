import '../styles/Badge.css'

export default function Badge({ status }) {
  const getClassName = () => {
    switch(status) {
      case 'Solved': return 'badge-solved'
      case 'Need Revision': return 'badge-revision'
      case 'Mastered': return 'badge-mastered'
      default: return 'badge-unattempted'
    }
  }

  return <span className={`badge ${getClassName()}`}>{status}</span>
}
