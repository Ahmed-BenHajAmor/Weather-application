import React from 'react'
import './city.css'

function city({city}) {
  return (
    <div className='city'>
      <h2>{city.charAt(0).toUpperCase()+city.slice(1)}</h2>
    </div>
  )
}

export default city