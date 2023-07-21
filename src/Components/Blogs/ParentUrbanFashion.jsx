import React from 'react'
import UrbanFashion from './UrbanFashion'


function ParentUrbanFashion({ showUrbanFashion }) {
  return (
    <div>
        {showUrbanFashion ? <UrbanFashion /> : null}
    </div>
  )
}

export default ParentUrbanFashion;