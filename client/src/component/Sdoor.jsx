import React from 'react'
import Serdet from './Serdet'

const Sdoor = () => {
    const images=[
       { img:'images/sd1.gif'},
{ img:'images/sd2.gif'},
{ img:'images/sd5.gif'}
    ]

      const head='UPVC SLIDING DOORS'
    const para='Our sliding glass doors create a seamless connection between indoor and outdoor spaces, offering smooth operation, abundant natural light, and a modern aesthetic. Built with durable UPVC or Aluminium frames, they provide excellent insulation, easy maintenance, and a stylish solution that enhances both functionality and elegance in any setting.'
    const img= '/images/sd1.gif'
   
   
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img}  
       />
    </div>
  )
}

export default Sdoor
