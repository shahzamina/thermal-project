import React from 'react'
import Serdet from './Serdet'

const Swin = () => {
    const images=[
       { img:'images/sw11.gif'},
{ img:'images/sw4.gif'},
{ img:'images/upvcwin1.webp'}
    ]

      const head='UPVC SLIDEABLE WINDOWS'
    const para='Our sliding glass windows combine elegance and functionality, offering smooth operation and effortless ventilation. Crafted with UPVC or Aluminium frames, they ensure durability, energy efficiency, and low maintenance while maximizing natural light and providing a modern, sleek look for any home or commercial space'
    const img= '/images/udw.gif'
  
    
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img} 
       />
    </div>
  )
}

export default Swin
