import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' 
    className={`py-4 px-6 bg-blue-gradient hover:bg-black font-poppins
     font-medium text-[18px] text-primary outline-none  ${styles}`}>Hii My name is SPorty!</button>
  )
}

export default Button
