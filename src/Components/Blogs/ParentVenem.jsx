import React from 'react'
import Venem from './Venem'


function ParentVenem({showVenem}) {
  return (
    <div>
        {showVenem ? <Venem/> : null}
    </div>
  )
}

export default ParentVenem