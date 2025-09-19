import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [open, isOpen]=useState(false)

  return (
    <>
     <div className='Dyn-nav dyn'>

        <div className='n-wid mt-1 p-2 '>
            <Link to='/'><img 
          className='nav-img'
          src="/images/al.PNG"  
          alt="Logo" 
         
        />
        </Link> 
        </div>

        <button className='hamburger d-lg-none'
        onClick={()=>isOpen(!open)}>
          <i className="fa fa-bars" style={{ fontSize: "28px" }}></i>
        </button>

        <div className={`me-5 menu ${open?"sopen":"lopen"}`}>
        <ul className='navbar-nav  d-flex flex-lg-row gap-lg-5 nav-menu'>
        <li className='nav-item'>  <Link to='/' type='button' className='nav-link'> Home</Link></li>
        <li className='nav-item'>   <Link to='/about' className='nav-link'> About</Link></li>

      
         <li className='nav-item dropdown'> 
           <Link   role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false" className='nav-link dropdown-toggle'>Services</Link>

          <ul className='dropdown-menu w-50 mt-3 p-0 '>
              <li className='dropdown-submenu'><Link className="style mb-1 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>UPVC Doors</Link>

                  <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/sdoor">Sliding Door</Link></li>
                      <li><Link className="dropdown-item" to='/gdoor'>Openable Door</Link></li>
                  </ul>
               </li>
                            
              <li className='dropdown-submenu' ><Link className="style mb-1 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>UPVC Windows</Link>
                  <ul className="dropdown-menu">

              <li><Link  className="dropdown-item" to='/swin'>Sliding Windows</Link> </li>
              <li><Link className="dropdown-item" to='/gwin'>Openable Windows</Link></li>
                    </ul>
              </li>
                           
                            <li><Link to='/sky' className="style mb-2 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>UPVC Skylet</Link></li>
                             <li><Link to='/ven' className="style mb-2 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>UPVC Ventilator</Link></li>
                              <li><Link to='/gstair' className="style mb-2 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>UPVC Stairs</Link></li>
                               <li><Link to='/grail' className="style mb-2 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>UPVC Railing</Link></li>
                                <li><Link to='/scab' className="style mb-2 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>UPVC Shower Cabins</Link></li>
                        </ul>
    
    
    </li>
                   
                       
                  
         <li className='nav-item'> <Link to='/cform' className='nav-link'>Contact</Link></li>
  
        </ul>
        </div>

       

    </div> 
    </>
  )
}

export default Navbar
