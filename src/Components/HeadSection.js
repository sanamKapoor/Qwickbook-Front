import React from 'react';

function HeadSection() {
  return (
    
  <header class="text-light">
  <nav class="navbar navbar-expand-lg navbar-dark mx-5">
    <a class="navbar-brand" href="#">QwickBook</a>

    <button class="navbar-toggler " type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon btn-outline-light"></span> */}


      <div class="hamb-box">
      <div class="hamb-inner"></div>
    </div>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto float-right-lg">
        <li class="nav-item">
          <a href="product.html" class="nav-link mx-2">Sell</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2"
         href="#book-section">Explore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2"
         href="#footer">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="#"><i class="fas fa-shopping-cart"></i></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user"></i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">History</a>
            <div class="dropdown-divider"></div>
            <button class="btn btn-sm btn-outline-secondary my-2 my-sm-0 mx-2" data-toggle="modal" data-target="#exampleModalCenter">Login</button>
          </div>
        </li>
        
      </ul>
    </div>
  </nav>
</header>
  )
}

export default HeadSection
