import React from 'react'
import SingleBook from './SingleBook';

function BookCard() {
  return (
      <div className="row all-books mt-5 mx-5 w-100">
            <div className="col-lg-3">
              <SingleBook />
            </div>
            <div className="col-lg-3">
              <SingleBook />
            </div>
            <div className="col-lg-3">
              <SingleBook />
            </div>
            <div className="col-lg-3">
              <SingleBook />
            </div>
        </div>
  )
}

export default BookCard
