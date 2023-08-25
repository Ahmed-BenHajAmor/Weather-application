import React from 'react'
import './humwind.css'

function humwind({hum, wind}) {
  return (
    <div className='humwind'>
      <Each img='/src/Assets/humidity.png' data={`${hum} %`} text='humidity'/>
      <Each img='/src/Assets/wind.png' data={`${wind} km/h`} text='wind'/>
    </div>
  )
}

const Each = ({img, data, text})=>{
  return (
    <div className='each'>
      <img src={img} alt={text} />
      <div>
        <p>{data}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default humwind