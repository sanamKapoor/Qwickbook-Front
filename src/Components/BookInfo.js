import React from 'react';


function BookInfo() {
  return (
    <div class="container main">
    <div class="card border rounded-lg shadow-lg mt-5">
        <div class="row no-gutters">
          <div class="col-md-5 p-3">
            <div class="row">
              <div class="col-3 p-3">
                  <div class="row d-flex flex-column">
                      <div class="col mt-2">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51so%2BygbAGL._SX363_BO1,204,203,200_.jpg" alt="" class="img-fluid img-thumbnail" />
                      </div>
                      <div class="col mt-2">
                        <img src="https://bitemyapp.com/images/lpthw_digi_toc.png" alt="" class="img-fluid img-thumbnail" />
                      </div>
                      <div class="col mt-2">
                        <img src="https://bitemyapp.com/images/lpthw_phys.jpg" alt="" class="img-fluid img-thumbnail" />
                      </div>
                    </div>
              </div>
              <div class="col-9">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/51so%2BygbAGL._SX363_BO1,204,203,200_.jpg" alt="" class="img-fluid" />
              </div>
            </div>
          <div class="container mt-5">
            <div class="col">
            <h4><i class="fas fa-rupee-sign"></i>
             250 INR 
              <button class="btn btn-warning btn-sm ml-3">Add to Cart</button>
            </h4>
            <p class="text-muted">Fixed price</p>
          </div>
          </div>
          </div>
  
          <div class="col-md-7 book-info">
            <div class="card-body p-4">
              <div class="desc row bg-light p-3 shadow m-4">
                <div class="card-text w-100">
                  <h5>Learn Python 3 The Hard Way <br /> <small class="text-muted">by Zed A.Shaw </small>
                  </h5>
                  <p>Edition - 4th</p>  
                </div>
              </div>
              <div class="desc row bg-light p-3 shadow m-4">
                <div class="card-text w-100">
                  <h5 class="card-title">Description</h5>
                  <div class="row my-2">
                    <div class="col">Language : English</div>
                    <div class="col">Publisher : Pearson</div>
                  </div>
                  <div class="row my-2">
                      <div class="col">Pages : 567</div>
                      <div class="col">ISBN : 9780321884916</div>
                  </div>
                  <div class="row my-2">
                      <div class="col">Condition : Good</div>
                      
                  </div>
                </div>
              </div>
              <div class="desc row bg-light p-3 shadow m-4">
                <div class="card-text w-100">
                  <h5 class="card-title">Seller</h5>
                  <div>
                    Aman Sharma <br />
                     Mobile : +918943786543 <br />
                     Email : aman@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default BookInfo
