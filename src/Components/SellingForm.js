import React from 'react'

function SellingForm() {
  return (
    <div className="main-of-selling">
  <div className="card shadow-lg selling-form-card">
    <div className="row">
      <div className="info col bg-warning d-flex flex-column justify-content-center align-items-center">
        <div id="uploaded" className="card w-75 h-50 d-flex flex-column justify-content-center align-items-center">
          <p className="text-muted border px-3 py-2 mb-1">+</p>
          <p className="text-muted">Drag File to Upload</p>
        </div>
        <input type="file" name="" id="file" className="mt-5" />
      </div>

      <div className="book-form col-7">

        {/* <form action="" className="form p-5 text-muted mx-2 selling-form">
        <h3 className="text-center mb-5">Fill Details and get Order</h3>
          <input type="text" name="Book_Name" id="" placeholder="Book Title" className="form-control mt-4" />
          <input type="text" name="Author_Name" id="" placeholder="Author Name" className="form-control mt-4" />
              <div className="row">
                <div className="col">
              <input type="text" name="Book_Edition" id="" placeholder="Edition" className="form-control mt-4" />
                </div>
                <div className="col">
              <input type="text" name="Publisher" id="" placeholder="Publisher" className="form-control mt-4" />
                </div>
              </div>

            <div className="row">
                <div className="col">
              <input type="text" name="Book_Language" id="" placeholder="Language" className="form-control mt-4" />
                </div>
                <div className="col">
              <input type="text" name="Book_Pages" id="" placeholder="Total Pages" className="form-control mt-4" />
                </div>
              </div>

              <div className="row">
                  <div className="col">
                <input type="text" name="Book_ISBN" id="" placeholder="ISBN Number" className="form-control mt-4" />
                  </div>
                  <div className="col">
                  <select className="form-control mt-4">
                      <option selected>Select Condition</option>
                      <option>Like New</option>
                      <option>Good</option>
                      <option>Acceptable</option>
                    </select>
                  </div>
                </div>

              <div className="row mt-4">
                <textarea name="" id="" rows="4" className="form-control mt-2 mx-3" placeholder="Some description...."></textarea>
              </div>
        <i className="fas fa-arrow-right fa-2x float-right text-warning mt-5"></i>
        </form> */}



        <form className="form p-5 text-muted mx-2 user-form mt-5">
        <h3 className="text-center mb-5">Personal Detail for Contact</h3>
        <input type="text" name="seller-name" id="" placeholder="Firstname" className="form-control mt-4" />
        <input type="text" name="seller-email" id="" placeholder="Email" className="form-control mt-4" />
        <input type="text" name="seller-mobile" id="" placeholder="Mobile" className="form-control mt-4" />
        <textarea name="" id="" rows="4" className="form-control mt-4" placeholder="Address"></textarea>
        <button className="btn btn-secondary w-100 mt-4">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default SellingForm
