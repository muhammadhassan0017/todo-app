import React from 'react'

const Input = ({ type="text", placeholder, value, onChange }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} className='w-[500px] bg-gray-100 shadow border-none outline-none p-2.5 rounded text-md font-bold'/>
    </div>
  )
}

export default Input
