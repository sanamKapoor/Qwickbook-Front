import React from 'react'
import SecondaryHead from './Components/SecondaryHead';
import SellingForm from './Components/SellingForm';

function SellBook() {
  return (
    <React.Fragment>
      <div className="selling-header">
      <SecondaryHead />
      </div>
      <SellingForm />
    </React.Fragment>
  )
}

export default SellBook
