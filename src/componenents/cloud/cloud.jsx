import React from 'react'
import './cloud.css'


const getImg = (cloud)=>{
  const main = '/src/Assets/'
  switch (cloud){
    case 'Clear':
      return main + 'clear.png'
      break;
    case 'Clouds':
      return main + 'cloud.png'
      break;  
    case 'Drizzle':
      return main + 'drizzle.png'
      break;
    case 'Rain':
      return main + 'rain.png'
      break;     
    case 'Snow':
      return main + 'snow.png'
      break;      
  }
}
function cloud({cloud}) {
  return (
    <div className='cloud'>
      <img src={getImg(cloud)} alt="..." />      
    </div>
  )
}

export default cloud