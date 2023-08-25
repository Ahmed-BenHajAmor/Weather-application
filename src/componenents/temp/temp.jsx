import React from 'react'
import './temp.css'

function temp({temp}) {
  return (
    <div className='temp'>
      <h1>{temp}°c</h1>
    </div>
  )
}

export default temp