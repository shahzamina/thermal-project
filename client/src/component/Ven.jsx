import React from 'react'
import Serdet from './Serdet'

const Ven = () => {
    const images=[
       { img:'images/v2.jpg'},
{ img:'images/v1.jpg'},
{ img:'images/v5.jpg'}
    ]

      const head='UPVC Ventilator'
    const para='At Windows Innovation, we design and fabricate high-quality UPVC top-hung ventilators are designed to provide excellent ventilation while maintaining energy efficiency and security. These windows open outward from the top, allowing fresh air to circulate without compromising privacy or safety. Built with high-quality UPVC and durable hardware, they are ideal for kitchens, bathrooms, and any space where controlled airflow is essential. Ensure fresh air and comfort with our UPVC top-hung ventilators, offering smooth operation, durability, and excellent airflow control.'
    const img= '/images/ven10.webp'
  
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img}
       />
    </div>
  )
}

export default Ven
