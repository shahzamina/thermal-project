import React from 'react'
import Serdet from './Serdet'

const Gscab = () => {
    const images=[
       { img:'images/sc1.jpg'},
{ img:'images/sc4.jpg'},
{ img:'images/sc5.jpg'}
    ]
      const head='UPVC SHOWER CABINS'
    const para='At Windows Innovation, we specialize in premium UPVC and Aluminium shower cabins that combine modern design with durability. Our fabricated cabins are crafted to provide a sleek, waterproof, and hygienic solution for bathrooms, ensuring both style and functionality. Located in Islamabad, we offer customized sizes and designs to perfectly fit your space, delivering comfort, elegance, and long-lasting performance.'
    const img= '/images/sc2.jpg'

   


    
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img}  
       />
    </div>
  )
}
export default Gscab
