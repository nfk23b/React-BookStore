import React from 'react'
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover"/>
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>
        <span className="book-price">${price}</span>
        <button 
        onClick={onAddedToCart}
        className="btn btn-info add-to-cart">Add to cart</button>
      </div>
    </div>
  )
};

export default BookListItem;