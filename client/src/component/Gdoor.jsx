import React from 'react'
import Serdet from './Serdet'

const Gdoor = () => {
    const images=[
       { img:'images/gd1.jpg'},
{ img:'images/gd.jpg'},
{ img:'images/gd2.jpg'}
    ]
  const head='Glass Door'
    const para='Our openable UPVC and Aluminium glass doors combine modern design with superior functionality. Crafted for durability, energy efficiency, and ease of use, these doors allow smooth ventilation and natural light while ensuring security and insulation. Perfect for homes and commercial spaces, they bring elegance, practicality, and long-lasting performance to any interior or exterior setting.'
    const img= '/images/gd4.jpg'
   
    
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img}
       />
    </div>
  )
}

export default Gdoor
