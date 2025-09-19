import React from 'react'
import Serdet from './Serdet'

const Glasswin = () => {
    const images=[
       { img:'images/aw6.jpeg'},
{ img:'images/aw2.jpg'},
{ img:'images/aw1.jpeg'}
    ]

      const head='UPVC Glass Windows'
    const para=' UPVC and Aluminium glass openable windows offer a sleek, space-saving solution with smooth, effortless operation. Designed with UPVC and Aluminium frames, they provide excellent insulation, durability, and low maintenance. Ideal for modern homes and commercial spaces, these windows maximize natural light, enhance ventilation, and add a clean, contemporary aesthetic to any interior or exterior setting.'
    const img= '/images/win.jpg'
    
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img} 
       />
    </div>
  )
}

export default Glasswin
