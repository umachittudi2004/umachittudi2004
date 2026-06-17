import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Java IPA Preparation. Personal Study Tool.</p>
    </footer>
  )
}
