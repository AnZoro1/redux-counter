import React from 'react'
import { useSelector } from 'react-redux'

const Number = () => {
  const number = useSelector((state) => state.number)
  const theme = useSelector((state) => state.theme)
  console.log(theme)
  return <div>{number}</div>
}

export default Number
