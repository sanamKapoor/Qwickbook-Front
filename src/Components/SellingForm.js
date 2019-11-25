import React from 'react';
import axios from 'axios'

class SellingForm extends React.Component {

  state = {
    isUser: true,
    title: '',
    author: '',
    edition: '',
    publisher: '',
    pages: '',
    language: '',
    isbn: '',
    description: '',
    condition: '',
    image: null,
    price: '',

    firstname: '',
    email: '',
    mobile: '',
    address: ''
    }

    handleSubmit = (e) => {
      // e.preventDefault();
      const { title, author, edition, publisher, condition, pages, language, isbn, description, price,  firstname, email, mobile, address } = this.state;

      const book = {
        title, author, edition, publisher, pages, language, isbn, description, price, condition
      }
      const owner = { firstname, email, mobile, address }

      axios.post('http://localhost:5000/owner', {
        owner: owner
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))


      axios.post('http://localhost:5000/books', {
        book: book,
        owner: owner
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))

      e.preventDefault();
    }

    imageUpload = (e) => {
      e.preventDefault();

      let data = new FormData();
      data.append('file', e.target.files[0]);


      axios.post('http://localhost:5000/books/file', data)
      .then(res => console.log(res.statusText))
      .catch(err => console.log(err))
    }

    handleChange = (e) => {
      const { name, value } = e.target;
 
       this.setState({
         [name]: value
       })

    }

  setForm = () => {
    const { title, author, edition, publisher, pages, language, condition, isbn, description,  firstname, email, mobile, address, price } = this.state;

    if(this.state.isUser === true) {
      return(
        <div className="main-of-selling">
  <div className="card shadow-lg selling-form-card bg-warning">
    <div className="row">
      <form action="" className="form p-5 text-muted mx-2 selling-form w-100" id="book_info">
        <h2 className="text-center mb-5">Fill Details and get Order</h2>
          <input type="text" name="title" value={title} onChange={this.handleChange} id="" placeholder="Book Title" className="form-control mt-4" />
          <input type="text" name="author" value={author} onChange={this.handleChange} id="" placeholder="Author Name" className="form-control mt-4" />          
              <div className="row">
                <div className="col">
              <input type="text" name="edition" value={edition} onChange={this.handleChange} id="" placeholder="Edition" className="form-control mt-4" />
                </div>
                <div className="col">
              <input type="text" name="publisher" value={publisher} onChange={this.handleChange} id="" placeholder="Publisher" className="form-control mt-4" />
                </div>
              </div>

            <div className="row">
                <div className="col">
              <input type="text" name="language" value={language} onChange={this.handleChange} id="" placeholder="Language" className="form-control mt-4" />
                </div>
                <div className="col">
              <input type="text" name="pages" value={pages} onChange={this.handleChange} id="" placeholder="Total Pages" className="form-control mt-4" />
                </div>
              </div>

              <div className="row">
                  <div className="col">
                <input type="text" name="isbn" value={isbn} onChange={this.handleChange} id="" placeholder="ISBN Number" className="form-control mt-4" />
                  </div>
                  <div className="col">
                  <select className="form-control mt-4" name="condition" onChange={this.handleChange}>
                      <option value="" selected>Select Condition</option>
                      <option value="like_new">Like New</option>
                      <option value="good">Good</option>
                      <option value="acceptable">Acceptable</option>
                    </select>
                  </div>
                </div>
              <div className="row">
                <div className="col">
            <input type="file" name="image" placeholder="Book Image" className="mt-4" onChange={this.imageUpload} />
                </div>
                <div className="col">
                  <input type="number" name="price" id="" value={price} onChange={this.handleChange} className="form-control mt-4" placeholder="Price"/>
                </div>
              </div>
              <div className="row mt-4">
                <textarea name="description" id="" rows="4" onChange={this.handleChange} className="form-control mt-2 mx-3" placeholder="Some description....">{description}</textarea>
              </div>
          {/* <button className="btn btn-secondary w-100 mt-4" type="submit">Submit</button> */}
              <i className="fas fa-arrow-right fa-2x float-right text-light mt-4" onClick={() => this.setState({isUser: false})}></i>              
          </form>
        </div>
        </div>
  </div>
      )
    } else {
        return(
          <div className="main-of-selling">
            <div className="card shadow-lg selling-form-card bg-warning">
         <div className="row">
          <form className="form p-5 text-muted mx-2 user-form mt-5 w-100" id="user.info" onSubmit={this.handleSubmit}>
          <h2 className="text-center mb-5">Personal Detail for Contact</h2>
          <input type="text" name="firstname" id="" value={firstname} onChange={this.handleChange} placeholder="Firstname" className="form-control mt-4" />
          <input type="text" name="email" id="" value={email} onChange={this.handleChange} placeholder="Email" className="form-control mt-4" />
          <input type="text" name="mobile" id="" value={mobile} onChange={this.handleChange} placeholder="Mobile" className="form-control mt-4" />
          <textarea name="address"  id="" rows="4" onChange={this.handleChange} className="form-control mt-4" placeholder="Address">{address}</textarea>
          <button className="btn btn-secondary w-100 mt-4">Submit</button>
          <i class="fas fa-arrow-left fa-2x float-left text-light mt-5" onClick={() => this.setState({isUser: true})}></i>
          </form> 
        </div>
        </div>
  </div>
        )
    }
  }

  

  render(){
   return(
    <React.Fragment>
    {
      this.setForm()
    }
  </React.Fragment>
    )
 }
}

export default SellingForm
