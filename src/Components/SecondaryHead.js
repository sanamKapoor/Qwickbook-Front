import React from 'react';
import {Link} from 'react-router-dom';


function SecondaryHead() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light mx-5">
      <Link to="/">
      <a className="navbar-brand" href="#">QwickBook</a>
      </Link>

    <button className="navbar-toggler " type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon btn-outline-light"></span> */}


      <div className="hamb-box">
      <div className="hamb-inner"></div>
    </div>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto float-right-lg">
        <li className="nav-item">
          <Link to="sell-book">
          <a className="nav-link mx-2" href="#">Sell</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/">
            <a className="nav-link mx-2" href="#">Explore</a>
            </Link>
          
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2"
         href="#footer">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#"><i className="fas fa-shopping-cart"></i></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Profile</a>
            <a className="dropdown-item" href="#">History</a>
            <div className="dropdown-divider"></div>
            <button className="btn btn-sm btn-outline-secondary my-2 my-sm-0 mx-2" data-toggle="modal" data-target="#exampleModalCenter">Login</button>
          </div>
        </li>
        
      </ul>
    </div>
  </nav>
  </div>
  )
}

export default SecondaryHead
