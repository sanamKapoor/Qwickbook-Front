import React from 'react'

function BooksHead() {
  return (
  <div class="books" id="book-section">
    <div class="filter-bar bg-primary">
      <nav class=" navbar navbar-light w-75 mx-auto">
        <form class="form-inline">
          <button type="button" class="btn btn-outline-light mx-2 border rounded-pill">
            <i class="fas fa-book mr-2"></i> Title</button>
          <button type="button" class="btn btn-outline-light mx-2 border rounded-pill">
            <i class="far fa-user mr-2"></i> Author</button>
          <button type="button" class="btn btn-outline-light mx-2 border rounded-pill">
            <i class="fas fa-book-open mr-2"></i> Publisher</button>
          <button type="button" class="btn btn-outline-light mx-2 border rounded-pill">
            <i class="fas fa-barcode mr-2"></i> ISBN</button>
        </form>
        <form class="form-inline">
          <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username"
                aria-describedby="basic-addon2" />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><i class="fas fa-search"></i></span>
              </div>
          </div>
          <div class="dropdown">
              <button class="btn btn-outline-light mx-3 dropdown-toggle" type="button" id="dropdownMenu2"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-filter mr-2"></i>
                Filter
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something else here</button>
              </div>
           </div>
        </form>
      </nav>
      </div>
    </div>
  )
}

export default BooksHead
