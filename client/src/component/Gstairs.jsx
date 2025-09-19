import React from 'react'
import Serdet from './Serdet'

const Gstairs = () => {
    const images=[
       { img:'images/sta4.jpg'},
{ img:'images/stairs.jpg'},
{ img:'images/stairs1.jpg'}
    ]
      const head='Glass Stairs'
    const para='At Windows Innovation, we design and fabricate high-quality UPVC glass stairs are a modern architectural statement, designed to add openness, light, and elegance to any space. Crafted with premium tempered glass and robust fittings, they offer the perfect balance of safety, durability, and contemporary style. Whether for homes, offices, or commercial spaces, glass stairs create a sleek and spacious look that enhances both functionality and aesthetics. Perfect for homes, offices, and commercial spaces, our glass stairs redefine interiors with a bold, modern edge. Combining transparency with strength, they create a striking visual feature that is both safe and stylish.'
    const img= '/images/sta2.jpg'
   
    
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img}
       />
    </div>
  )
}

export default Gstairs
