import React from 'react'

function FeatureCards() {
  return (
    <div className="card-section">
    <div className="container p-4">
      {/* <div className="text-center text-light display-4">Why use QwickBook</div> */}

      <div className="feacher-cards">
        <div className="row my-3 pt-4 text-light">
          <div className="col">
            <div className="card extra-card p-4 text-center shadow card-1 border text-danger bg-transparent border-danger">
              <i className="far fa-comments fa-4x my-4"></i>
              <h2 className="my-4">Live chat option</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro amet obcaecati fugit ab praesentium ad
                molestias sed ipsa impedit eveniet!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quas.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card extra-card p-4 text-center shadow card-2 border text-primary bg-transparent border-primary">
              <i className="fas fa-globe fa-4x my-4"></i>
              <h2 className="my-4">Find books globally</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro amet obcaecati fugit ab praesentium ad
                molestias sed ipsa impedit eveniet!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quas.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card extra-card p-4 text-center shadow card-3 border text-warning bg-transparent border-warning">
              <i className="fas fa-money-bill-wave fa-4x my-4"></i>
              <h2 className="my-4">Sell at own price</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro amet obcaecati fugit ab praesentium ad
                molestias sed ipsa impedit eveniet!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeatureCards
