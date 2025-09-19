import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Card from './Card'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
const img='/images/uw7.jpg'
const ch='Contact Form'
  const h='UPVC WINDOWS AND DOOR SERVICES'
 const carousal=[
        {
            id:1,
              img:'/images/sd1.gif',
            title:'Sliding Doors',
            p:'UPVC sliding doors create a seamless connection between indoors and outdoors with smooth, space-saving operation. They combine strength and style while offering wide, unobstructed views.',
      
        
        },
         {
            id:2,
           img:'/images/sw1.gif',
            title:'Sliding Window',
            p:'UPVC sliding windows offer a sleek, space-saving design with effortless horizontal movement. They provide wide views and excellent insulation, making them perfect.',
     
         
        },
         { id:3,
           img:'/images/uw2.webp',
            title:'Openable Window',
            p:'UPVC sliding windows offer a sleek, space-saving design with effortless horizontal movement. They provide wide views and excellent insulation, making them perfect.',
        
       
          
        },
        
         {
            id:4,
           img:'/images/gd4.jpg',
               
            title:'Glass Doors',
            p:'Our UPVC glass doors combine modern aesthetics with strength and insulation. They offer a perfect balance of style, security, and durability while allowing natural light to brighten your interiors.',
   
            
        },


         
   {
            id:5,
            img:'./images/gwin.jpg',
            title:'Glass Window',
            p:'Enhance your space with premium glass windows that blend elegance, durability, and natural light. Designed for modern living, our solutions ensure energy efficiency, security, and timeless style.',
         
          
        },
         {
            id:6,
              img:'/images/ven11.jpeg',
            title:'Ventilator',
            p:'Top Hung UPVC ventilator windows are designed to improve airflow and natural light without compromising privacy. Their durable build and smooth operation make them ideal for utility areas.',
        
              
          
        },
            {
            id:6,
             img:'/images/s1.jpg',
            title:'Glass Skylet',
            p:'Skylight is a roof-mounted glass panel that allows natural sunlight to brighten interiors. It enhances energy efficiency while adding a modern and spacious feel to any space for home and offices.',
         
        },
        

    ]
     const carousal1=[
            {
                id:1,
                img:'./images/gsho.jpg',
                title:'Shower Cabin',
                p:'Enhance your space with premium glass windows that blend elegance, durability, and natural light. Designed for modern living, our solutions ensure energy efficiency, security, and timeless style.',
              
            },
             {
                id:2,
                img:'/images/st3.webp',
                title:'Glass Stairs',
                p:'Our UPVC glass doors combine modern aesthetics with strength and insulation. They offer a perfect balance of style, security, and durability while allowing natural light to brighten your interiors.',
              
            },
              {
                id:3,
                img:'/images/st5.jpg',
                title:'Glass Railing',
                p:'Our UPVC glass doors combine modern aesthetics with strength and insulation. They offer a perfect balance of style, security, and durability while allowing natural light to brighten your interiors.',
            
            }
          ]
          const h1='Other Services'
  return (
    <>
    <div className='home dyn position-relative' >
    <div className='home-content position-absolute mt-4'>
      <h2>Windows Innovation Best Fabricated UPVC & Aluminium <br/><span > Widows & Door</span></h2>
      <p>Discover the perfect blend of style, durability, and energy efficiency with our UPVC and Aluminium windows and doors. Designed to enhance your living spaces, our products provide superior insulation, low maintenance, and long-lasting performance while complementing modern and traditional architecture alike. Whether for homes or commercial projects, we deliver innovative solutions that bring comfort, security, and elegance to every space.</p>
      

    </div>
    </div>


  <Card h={h} carousal={carousal}  />
 <Services carousal1={carousal1} h1={h1} />
 <Contact  img={img} ch={ch}/>

    </>
  )
}

export default Home
