import React from 'react'
import Checkout1 from '../Checkout'


function ParentCheckout({showCheckout1}) {
  return (
    <div>
        {showCheckout1 ? <Payment /> : null}
    </div>
  )
}

export default ParentCheckout