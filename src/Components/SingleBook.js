import React from 'react';
import {Link} from 'react-router-dom';
import BookInfo from './BookInfo';
import axios from 'axios';

class SingleBook extends React.Component {

  state = {
    data: null
  }

  renderBook = () => {
    console.log('Clicked');
  }


  render() {
    const { title, author, edition, price, owner } = this.props.book;
    const imageUrl = this.props.image;
    console.log(imageUrl);
  return (
    <Link to="/book">
        <div className="single-book card shadow my-4" >
             <div className="card-img-section">
              <img src={imageUrl} alt="book"/>
                <i className="fas fa-heart fa-2x rounded-circle text-center m-2"></i>
            </div>
            <div className="card-body " onClick={() => this.renderBook }>
              <div className="card-text">
                <p className="text-dark lead d-inline-block rounded">{title} by {author} (Edition - {edition})
</p>
                  <br />
                <p className="rounded text-dark d-inline-block lead">Price - {price}INR </p>
                <br />
                <ul className="list-unstyled text-dark">
                  <li className="lead list-unstyled-item">Seller Info :</li>
                  <li>{owner.firstname}</li>
                  <li>{owner.mobile}, {owner.email}</li>
                </ul>
              </div>
            </div>
          </div>
          </Link>
  )
}
}

export default SingleBook
