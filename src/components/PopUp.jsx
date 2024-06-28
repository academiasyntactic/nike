import React from 'react'
import zapato from '../assets/Red Shoe.png'

const PopUp = ({setEstado, precio}) => {
  return (
    <div className='absolute bg-white top-0 w-screen h-screen'>
      <img src={zapato} alt="" />
      <button onClick={()=>setEstado(false)} >Cerrar popup</button>
      <h3>{precio}</h3>
    </div>
  )
}

export default PopUp
