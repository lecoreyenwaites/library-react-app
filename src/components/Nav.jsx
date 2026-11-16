import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav__container">
      <div className="nav__row">
        <Link to="/" className="nav__logo">
          Library App
        </Link>
        <ul className="nav__links">
          <li><Link to="/" className="nav__link">Home</Link></li>
          <li><Link to="/books" className="nav__link">Books</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;