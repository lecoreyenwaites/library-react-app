import React from 'react';
import { Link, useParams } from 'react-router-dom';

function BookInfo({ books }) {
  const { id } = useParams();
  const book = books.find((book) => book.id === +id);

  if (!book) {
    return <h2>Book not found!</h2>;
  }

  return (
    <div id="books__body">
      <div className="books__container">
        <div className="row">
          <div className="books__selected--top">
            <Link to="/books" className="book__link">
              ← Back
            </Link>
          </div>
          <div className="book__selected">
            <figure className="book__selected--figure">
              <img src={book.url} alt={book.title} className="book__selected--img" />
            </figure>
            <div className="book__selected--description">
              <h2>{book.title}</h2>
              <div className="book__ratings">
                {Array.from({ length: Math.floor(book.rating) }).map((_, index) => (
                  <span key={index} className="star">⭐</span>
                ))}
              </div>
              <div className="book__price">
                <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span> ${book.salePrice.toFixed(2)}
              </div>
              <div className="book__summary">
                <h3 className="book__summary--title">Summary</h3>
                <p>
                  This is an essential read for mastering skills, enhancing productivity, and accelerating your career growth in technology and business.
                </p>
              </div>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;