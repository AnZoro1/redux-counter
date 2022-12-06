import React from 'react'
import { useDispatch } from 'react-redux'

const Buttons = () => {
  const dispatch = useDispatch()
  const handleInc = () => {
    dispatch({ type: 'plus' })
  }
  const handleDec = () => {
    dispatch({ type: 'minus' })
  }
  const handlRand = () => {
    dispatch({ type: 'rand', payload: Math.floor(Math.random(0, 10) * 20) })
  }
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handlRand}>rand</button>
    </div>
  )
}

export default Buttons
