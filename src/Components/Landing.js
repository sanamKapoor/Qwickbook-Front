import React from 'react'

function Landing() {
  return (
    <div className="landing">
    <div className="row no-gutters">
      <div className="content w-75 bg-light d-flex">
        <div className="main-heading ml-5">
          <div className="display-2">Best Place to sell and <br /> get used books</div>
          <p className="lead w-50 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatem
            temporibus optio iusto officia ipsam rerum odit velit recusandae sint.</p>
          <a href="#book-section" className="btn btn-warning border rounded-pill border-warning px-4" >Explore</a>
        </div>
      </div>
      <div className="child w-25 bg-warning"><img src="./Images/91082_preview.png" alt="" /></div>
    </div>
  </div>
  )
}

export default Landing
