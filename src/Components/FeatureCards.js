import React from 'react'

function FeatureCards() {
  return (
    <div class="card-section">
    <div class="container p-4">
      <div class="text-center text-info display-4">Why use QwickBook</div>

      <div class="feacher-cards">
        <div class="row my-3 pt-4 text-light">
          <div class="col">
            <div class="card p-4 text-center shadow card-1 border">
              <i class="far fa-comments fa-4x my-4"></i>
              <h2 class="my-4">Live chat option</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro amet obcaecati fugit ab praesentium ad
                molestias sed ipsa impedit eveniet!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quas.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="card p-4 text-center shadow card-2 border">
              <i class="fas fa-globe fa-4x my-4"></i>
              <h2 class="my-4">Find books globally</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro amet obcaecati fugit ab praesentium ad
                molestias sed ipsa impedit eveniet!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quas.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="card p-4 text-center shadow card-3 border">
              <i class="fas fa-money-bill-wave fa-4x my-4"></i>
              <h2 class="my-4">Sell at own price</h2>
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
