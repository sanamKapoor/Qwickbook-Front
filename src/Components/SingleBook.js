import React from 'react';
import {Link} from 'react-router-dom';

function SingleBook() {
  return (
    <Link to="/book">
        <div className="single-book card shadow">
             <div className="card-img-section">
                <img src="https://cdn.shopify.com/s/files/1/0051/7692/files/25-cd-stack_660x.progressive.jpg?v=1558566351" alt=""
              className="h-75 card-img"></img>
                <i className="fas fa-heart fa-2x rounded-circle text-center m-2"></i>
            </div>
            <div className="card-body ">
              <div className="card-text">
                <p className="text-dark bg-dark d-inline-block border rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, illo.</p>
                  <br />
                <p className="border rounded text-dark bg-dark d-inline-block">Price:      100INR only</p>
                <br />
                <p className="border rounded text-dark bg-dark d-inline-block">Aman Sharma 8473863895</p>
              </div>
            </div>
          </div>
          </Link>
  )
}

export default SingleBook
