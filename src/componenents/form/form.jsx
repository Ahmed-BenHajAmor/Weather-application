import React from 'react'
import './form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const handelChange = (newInput, setInput)=>{
  setInput(newInput)
}

const handelSubmit = (setCity, setInput, input)=>{
  setCity(input || 'tunisia')
  setInput('')
}
function form({setInput, setCity, input}) {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      handelSubmit(setCity, setInput, input)
    }} className='form'>
      <input value={input} onChange={(e)=>{
        handelChange(e.target.value, setInput, input)
      }} type="text" placeholder='search'/>
      <button type='submit' className='btn'><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#969696",}} /></button>
    </form>
  )
}

export default form