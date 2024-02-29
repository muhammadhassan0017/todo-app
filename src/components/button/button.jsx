import React from 'react'

const Button = ({ name, type="button", icon, onClick }) => {
  return (
    <div>
      <button type={type} onClick={onClick} className='bg-blue-400 p-2.5 rounded outline-none text-white text-md font-bold'> {icon && icon} {name}</button>
    </div>
  )
}

export default Button
