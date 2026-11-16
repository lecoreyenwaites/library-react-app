import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <span className="footer__logo--title">Library App</span>
            </figure>
          </Link>
          <ul className="footer__list">
            <li><Link to="/" className="footer__link">Home</Link></li>
            <li><Link to="/books" className="footer__link">Books</Link></li>
          </ul>
          <div className="footer__copyright">
            Copyright &copy; 2026 Library App
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;