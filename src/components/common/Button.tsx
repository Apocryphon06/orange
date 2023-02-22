import React from 'react'

interface Props {
    label?:any,
    width?:any,
    onClick?:any
}

export const Button: React.FC<Props> = ({label,width,onClick}:any) =>{
  return (
    <button onClick={onClick} className={`${width} bg-lightBlue text-white font-robotoMedium text-xl rounded-xl outline-none hover:shadow-lg`}>{label}</button>
  )
}

export default Button