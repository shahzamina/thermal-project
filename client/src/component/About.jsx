import React from 'react'
import Gallery from './Gallery'

const About = () => {

  const images=[
      '/images/gal1.jpg',
      '/images/gal2.jpg',
      '/images/gal3.jpg',
      '/images/gal4.jpg',
      '/images/gal5.jpg',
      '/images/gal6.jpg',
      '/images/gal7.jpg',
      '/images/gal8.jpg',
      '/images/gal9.jpg',
      '/images/gal10.jpg',
      '/images/gal11.jpg',
      '/images/gal12.jpg',
      '/images/gal13.jpg',
      '/images/gal14.jpg',
      '/images/gal15.jpg',
      '/images/gal16.jpg',
      '/images/gal17.jpg',
  
  ]

  const img=[
    '/images/c1.png',
     '/images/C2.webp',
      '/images/c3.jpg',
       '/images/c4.webp',
        '/images/c5.jpg',
        
  ]
  return (
    <>
    



    <div className=' dyn about'>
       <div className='oth-ser  ' style={{height:"35vh"}} >
          <h1  className='mt-5 text-black  '>ABOUT US </h1>
        
</div>

 <div className=' d-flex flex-column flex-md-row  gap-1 ' style={{marginTop:'6%'}}>
        <div className='dyn a-img'>
            <h2 className='text-center ' style={{marginTop:'10%', objectFit:'cover',fontFamily:'sans-serif', fontWeight:'bold'}}>Windows Innovation best fabricated </h2>
             <h3 className='text-center p-1' style={{ objectFit:'cover',fontFamily:'sans-serif', fontWeight:'bold'}}>UPVC & Aluminium
Widows & Door </h3>
            <p className='p-3 mt-3' style={{fontFamily:'sans-serif',wordSpacing:'5%', lineHeight:'35px'}}>We specialize in premium UPVC and Aluminium windows and doors that combine durability, elegance, and modern functionality. Designed to enhance both residential and commercial spaces, our products offer superior insulation, low maintenance, and long-lasting performance. With a variety of styles and finishes. We provide a complete range of premium solutions including UPVC and Aluminium windows and doors, skylights, ventilators, shower cabins, and stylish stair railings. Each product is crafted with durability, elegance, and functionality in mind, ensuring comfort, safety, and modern design for your home or business.
            </p>
           
        </div>
        <div className='image-container a-img dyn'>
                <img  className='mt-4 mb-4' style={{height:'500px'}} src='/images/g2.jpg' alt='error' />
        </div>
      </div>

 <div className='oth-ser my-5 ' style={{height:"35vh"}} >
          <h1  className='mt-5 text-black '>OUR GALLERY</h1>
</div>

<Gallery images={images}  />

<div className='dyn ' style={{backgroundColor:"rgba(248, 244, 244, 1)" , paddingTop:'65px', paddingBottom:'80px', marginBottom:'5%' , marginTop:'6%'}}>
<h2 className='mb-5' style={{ textAlign:'center',fontFamily:'sans-serif', fontWeight:'bold'}}>OUR CLIENTS</h2>
<div className='d-flex flex-column flex-md-row  gap-5 justify-content-center'>
  {
    img.map((c,id)=>(
      <img
      className='c-abo'
      style={{height:'100px'}}
      key={id}
      src={c}
      alt={`img${id}`}
      />
    ))
  }
</div>
 </div>
    </div>
    </>
  )
}

export default About
