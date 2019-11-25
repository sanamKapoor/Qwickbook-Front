import React from 'react'
import SingleBook from './SingleBook';
import axios from 'axios';

class BookCard extends React.Component {

    state = {
      books: '',
      imageUrl: ''
    }

    componentWillMount(){
    axios('http://localhost:5000/books')
      .then(data => {
        this.setState({
          books: data.data.data,
          imageUrl: 'http://localhost:5000/books/' + data.data.data.imageUrl
        })
      })
      .catch(err => console.log(err))
    }

  render(){
  return (
      <div className="row all-books mt-5 mx-5 w-100">
      {
        this.state.books.length > 0 ?
        this.state.books.map(book => {
          return (
          <div className="col my-4">
            <SingleBook book={book} image={this.state.imageUrl} />
          </div>
          )
        }) : ''
      }
      </div>
  )
}
}

export default BookCard
