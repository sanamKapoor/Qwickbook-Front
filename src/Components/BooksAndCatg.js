import React from 'react'
import AllBooks from './AllBooks';

function BooksAndCatg() {
  return (
    <div className="row">
      <div className="col-2 category text-center text-light">
       <h3 className="border-bottom pb-2 w-50 mx-auto mt-3">Categories</h3>

       <ul className="list-unstyled mt-5 text-center text-capitalize">

        <li className="my-4">art & music</li>
        <li className="my-4">biographies</li>
        <li className="my-4">business</li>
        <li className="my-4">comics</li>
        <li className="my-4">computer & tech</li>
        <li className="my-4">health & fitness</li>
        <li className="my-4">history</li>
        <li className="my-4">medical</li>
        <li className="my-4">science</li>
        <li className="my-4">social science</li>
        <li className="my-4">sports</li>
        <li className="my-4">travel</li>


       </ul>
      </div>
      <div className="col-10">
        <AllBooks />
      </div>
    </div>
  )
}

export default BooksAndCatg
