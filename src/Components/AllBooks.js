import React from 'react'
import BookCard from './BookCard';
import Pages from './Pages';

function AllBooks() {
  return (
    <div className="row mx-auto">
      <BookCard />
      <BookCard />
      <Pages />
    </div>
  )
}

export default AllBooks
