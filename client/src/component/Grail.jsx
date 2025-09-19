import React from 'react'
import Serdet from './Serdet'

const Grail = () => {
    const images=[
       { img:'images/rail3.jpg'},
{ img:'images/r1.jpg'},
{ img:'images/rail2.jpg'}
    ]

      const head='UPVC GLASS RAILING'
    const para='At Windows Innovation, we design and fabricate high-quality UPVC glass railings that bring a modern, elegant touch to your interiors and exteriors. Our durable and weather-resistant railings ensure safety without compromising style, making them ideal for balconies, staircases, and terraces in Islamabad homes and commercial spaces. ur UPVC glass railings combine strength, elegance, and modern design. Perfect for balconies, staircases, and terraces, they provide a clear, open view while maintaining maximum safety. With durable UPVC frames and tempered glass, these railings resist weather, corrosion, and wear making them a long-lasting choice for homes and businesses in Islamabad.'
    const img= '/images/gr1.jpg'
   
    
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img} 
       />
    </div>
  )
}

export default Grail
