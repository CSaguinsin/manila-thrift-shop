import React from 'react'
import ComfortZone from './ComfortZone'


function ParentComfortZone({showComfortZone}) {
  return (
    <div>
        {showComfortZone ? <ComfortZone/> : null}
    </div>
  )
}

export default ParentComfortZone;