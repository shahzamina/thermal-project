import React from 'react'
import Serdet from './Serdet'

const Skylet = () => {
    const images=[
       { img:'images/s4.jpg'},
{ img:'images/sky4.jpg'},
{ img:'images/s5.jpg'}
    ]

      const head='UPVC SKYLET SERVICE'
    const para='At Windows Innovation, we design and fabricate high-quality UPVC skylights, crafted with high-quality glass and durable UPVC frames. Designed for roofs and ceilings, skylights enhance brightness, improve ventilation, and add a modern architectural touch to your home or office in Islamabad. Our UPVC skylights are the perfect solution for natural light and fresh air, combining durability with elegant design.'
    const img= '/images/s1.jpg'

   
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img}
       />
    </div>
  )
}

export default Skylet
