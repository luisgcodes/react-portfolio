// Footer
const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <ul className="footer-links">
          <li>
              <a href="https://www.linkedin.com/in/luis-gutierrez-a32ab4230/" target="_blank" rel="noreferrer">
                <span className="icon icon-linkedin" aria-label="linkedin profile link"></span>
              </a>
          </li>
          <li>
              <a href="https://github.com/luisgcodes?tab=repositories" target="_blank" rel="noreferrer">
                <span className="icon icon-github" aria-label="github profile link"></span>
              </a>
          </li>
        </ul>
        <p>Made by Luis Gutierrez.</p>
      </section>
    </footer>
  )
}
export default Footer;