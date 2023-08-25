import React, { useEffect, useState } from "react";
import  City from './componenents/city'
import  Cloud from './componenents/cloud'
import  Form from './componenents/form'
import  Humwind from './componenents/humwind'
import  Temp from './componenents/temp'
import './App.css'
import {data} from './data'

function App(){
  const [city, setCity] = useState('tunisia')
  const [input, setInput] = useState('')
  const [info, setInfo] = useState({})
  const [found, setFound] = useState(true)
  useEffect(()=>{
    data(city)
    .then((d)=>{
      const ob = {
        temp: Math.round(d.main.temp),
        hum: d.main.humidity,
        wind: d.wind.speed,
        cloud: d.weather[0].main,
      }
      setInfo(ob)
      setFound(true)
    })
    .catch(error=>{
      setFound(false)
      
    })

  }, [city])
  
  return <section className="all">
    <Form setInput={setInput} setCity={setCity} input={input}  city={city}/>
    {
      !found ? <NotFound /> : <></>
    }
    <Cloud cloud={info.cloud}/>
    <Temp temp={info.temp}/>
    <City city={city}/>
    <Humwind {...info}/>
  </section>
}

const NotFound = ()=>{
  return <p className="found">CITY NOT FOUND</p>
}
export default App;