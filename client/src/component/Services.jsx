import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
const Services = ({carousal1,h1}) => {
  
  return (
    <div className='dyn'>
        <div className='oth-ser'>
          <h1>{h1}</h1>
</div>

  <div  className='position-relative d-flex flex-column  flex-lg-row  flex-wrap justify-content-center gap-1'>
{
    carousal1.map((item,index)=>(
        <div key={index}  className='w-card ser-lef image-container me-3 bg-white pb-4 h-75' style={{boxShadow:'0px 2px 4px rgb(18, 150, 184)',position:'absolute' ,bottom:'100px' , position:'relative'}}>
         
            <img className='p-3'  style={{width:'100%', height:'400px'}} src={item.img} alt={item.title} />
            

            <h3 className='cards w-75 fs-5 style  p-4 text-center' style={{borderRadius:'45%', backgroundColor:'rgb(18, 150, 184)', marginLeft:'14%'}}>{item.title}</h3>
            <p className=' style mt-4 p-3 ms-3 me-3' style={{textAlign:'left', fontSize:'15px' }}>{item.p}</p>
          
            </div>
            
    ))
}
</div>
    </div>
  )
}

export default Services
