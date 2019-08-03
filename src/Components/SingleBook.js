import React from 'react';
import {Link} from 'react-router-dom';

function SingleBook() {
  return (
    <Link to="/book">
        <div class="card shadow">
             <div class="card-img-section">
                <img src="./Images/97539508-black-wood-dark-background-structure-very-high-resolution.jpg" alt=""
              class="card-img"></img>
                <i class="fas fa-heart fa-2x rounded-circle text-center m-2"></i>
            </div>
            <div class="card-body ">
              <div class="card-text">
                <p class="text-dark bg-dark d-inline-block border rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, illo.</p>
                  <br />
                <p class="border rounded text-dark bg-dark d-inline-block">Price:      100INR only</p>
                <br />
                <p class="border rounded text-dark bg-dark d-inline-block">Aman Sharma 8473863895</p>
              </div>
            </div>
          </div>
          </Link>
  )
}

export default SingleBook
