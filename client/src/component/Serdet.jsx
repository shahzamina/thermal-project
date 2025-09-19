import React from 'react'
import './Serdet.css'
const Serdet = ({images,para,head,img}) => {
   
  return (
    <div className='dyn mt-5 '>
      <div className='d-flex flex-column flex-md-row gap-5' style={{marginTop:'6%'}}>
        <div className='dyn '>
            <h2 className='text-center' style={{marginTop:'10%', objectFit:'cover',fontFamily:'sans-serif', fontWeight:'bold'}}>{head}</h2>
            <p className='p-3 mt-3 ms-5' style={{fontFamily:'sans-serif',wordSpacing:'5%', lineHeight:'35px'}}>{para}</p>
        </div>
        <div className='d-none d-md-flex image-container '>
                <img  className='mt-4 mb-4  ' style={{height:'450px'}} src={img} alt={head} />
        </div>
      </div>

      


    

      <div className='d-flex flex-column flex-md-row   w-ser' style={{marginTop:'7%', marginBottom:'5%'}}>
        {
            images.map(item =>(
                    <div key={item} className=' image-container d-wid '>
                        <img  className='det-wid ' style={{height:'470px'}} src={item.img} alt="" />

                        </div>
            ))
        }
      </div>
    </div>
  )
}

export default Serdet
