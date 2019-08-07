import React from 'react'

function BooksHead() {
  return (
  <div className="books-head" id="book-section">
    <div className="filter-bar">
      <nav className=" navbar navbar-light w-75 mx-auto">
        <form className="form-inline">
          <button type="button" className="btn btn-outline-light mx-2 border rounded-pill">
            <i className="fas fa-book mr-2"></i> Title</button>
          <button type="button" className="btn btn-outline-light mx-2 border rounded-pill">
            <i className="far fa-user mr-2"></i> Author</button>
          <button type="button" className="btn btn-outline-light mx-2 border rounded-pill">
            <i className="fas fa-book-open mr-2"></i> Publisher</button>
          <button type="button" className="btn btn-outline-light mx-2 border rounded-pill">
            <i className="fas fa-barcode mr-2"></i> ISBN</button>
        </form>
        <form className="form-inline">
          <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username"
                aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></span>
              </div>
          </div>
          {/* <div className="dropdown dropright">
              <button className="btn btn-outline-light mx-3 dropdown-toggle" type="button" id="dropdownMenu2"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-filter mr-2"></i>
                Filter
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
              </div>
           </div> */}
        </form>
      </nav>
      </div>
    </div>
  )
}

export default BooksHead
