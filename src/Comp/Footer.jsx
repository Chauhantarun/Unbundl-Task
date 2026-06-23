import React from 'react'

const Footer = () => {
  return (
    <div>
       {/* ── FOOTER ── */}
      <footer className="footer" aria-label="Site footer">
        <div className="footer-grid">
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {["Home", "Book a Free Scan", "How it Works", "Range of Aligners", "Aligners vs Braces", "FAQs"].map(l => (
                <li key={l}><a href="#" aria-label={l}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Get in Touch Now!</h4>
            <div className="footer-contact">
              <div className="contact-row"><span>📞</span> 011-6932-8350</div>
              <div className="contact-row"><span>✉️</span> support@whistle.in</div>
            </div>
          </div>
          <div>
            <h4>Follow us on</h4>
            <div className="social-row">
             
  <a
    href="https://instagram.com"
    className="social-icon"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="footer-img" src="../src/img/20.png" alt="Instagram" />
  </a>

  <a
    href="https://facebook.com"
    className="social-icon"
    aria-label="Facebook"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="footer-img" src="../src/img/21.png" alt="Facebook" />
  </a>

  <a
    href="https://x.com"
    className="social-icon"
    aria-label="X / Twitter"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="footer-img" src="../src/img/22.png" alt="X" />
  </a>

            </div>
          </div>
          <div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer