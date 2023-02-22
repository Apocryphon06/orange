import React from 'react'

interface Props{
    placeholder?: any,
    width?:any,
}

export const Input:React.FC<Props> = ({placeholder,width}) => {
  return (
    <input className={`${width}  caret-darkBlueLight text-xl rounded-2xl bg-white text-darkBlueLight outline-none px-3 hover:shadow-lg`} placeholder={placeholder}/>
  )
}

export default Input