import React from 'react'
import Payment from '../Payment'



function ParentPayment({showPayment}) {
  return (
    <div>
        {showPayment ? <Payment /> : null}
    </div>
  )
}

export default ParentPayment