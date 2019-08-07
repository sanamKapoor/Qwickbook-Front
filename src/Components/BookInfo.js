import React from 'react';


function BookInfo() {
  return (
    <div className="main-of-info">
    <div className="container-fluid book-page">
    <div className="card shadow-lg border rounded-lg book-card">
        <div className="clip"></div>
      <div className="row">
        <div className="col p-5 book-card-col">
            <div className="row">
                <div className="col-3">
                    <div className="row d-flex flex-column">
                        <div className="col mt-2">
                          <img src="https://images-na.ssl-images-amazon.com/images/I/51so%2BygbAGL._SX363_BO1,204,203,200_.jpg" alt="" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col mt-2">
                          <img src="https://bitemyapp.com/images/lpthw_digi_toc.png" alt="" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col mt-2">
                          <img src="https://bitemyapp.com/images/lpthw_phys.jpg" alt="" className="img-fluid img-thumbnail" />
                        </div>
                      </div>
                </div>
                <div className="col-9 p-3">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51so%2BygbAGL._SX363_BO1,204,203,200_.jpg" alt="" className="img-fluid" />
                </div>
              </div>
        </div>


        <div className="col p-4 book-card-col">
          <h3>Learn Python 3 The Hard Way <br />
           <small className="text-muted">by Zed A.Shaw (Edition - 4th)</small>
            </h3>
            <button className="btn btn-primary my-3"><i className="fas fa-rupee-sign fa-1x"></i> 250</button>

           
            <div className="p-4 w-75 border border-right-0 border-left-0">
              <div className="row py-2">
              <div className="col-4 text-muted">Language</div>
              <div className="col-8">English</div>
            </div>

            <div className="row py-1">
              <div className="col-4 text-muted">Publisher</div>
              <div className="col-8">Pearson</div>
            </div>
              <div className="row py-1">
              <div className="col-4 text-muted">ISBN</div>
              <div className="col-8">87483279828758</div>
            </div>
              <div className="row py-1">
              <div className="col-4 text-muted">Pages</div>
              <div className="col-8">578</div>
            </div>
              <div className="row py-1">
              <div className="col-4 text-muted">Condition</div>
              <div className="col-8">Good</div>
            </div>
            </div>

            <h4 className="my-2 text-muted">Owner</h4>
            <p>Aman Sharma <br /> Email - aman@33gmail.com <br /> Mobile - +918976543678 <br /> Address - Sector-43, Prem Nagar (Karnal) </p>
            <button className="btn btn-warning w-75 mt-2">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  </div>

  )
}

export default BookInfo;
