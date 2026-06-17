import '../styles/SearchBar.css'

export default function SearchBar({ value, onChange, placeholder = "Search questions..." }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
      <span className="search-icon">🔍</span>
    </div>
  )
}
