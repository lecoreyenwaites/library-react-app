import React from 'react';
import { Link } from 'react-router-dom';

function Books({ books }) {
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">All Books</h2>
              </div>
              <div className="books">
                {books.map((book) => (
                  <div className="book" key={book.id}>
                    <Link to={`/books/${book.id}`}>
                      <figure className="book__img--wrapper">
                        <img src={book.url} alt={book.title} className="book__img" />
                      </figure>
                    </Link>
                    <div className="book__title">
                      <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </div>
                    <div className="book__price">
                      <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span> ${book.salePrice.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;