import React from 'react'
import SingleBook from './SingleBook';

function BookCard() {
  return (
    <div class="all-books mx-auto">
      <div class="row container-fluid my-5">
            <div class="col-lg-3">
              <SingleBook />
            </div>
            <div class="col-lg-3">
              <SingleBook />
            </div>
            <div class="col-lg-3">
              <SingleBook />
            </div>
            <div class="col-lg-3">
              <SingleBook />
            </div>
        </div>
      </div>
  )
}

export default BookCard
